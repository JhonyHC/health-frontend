// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from 'formik-mui';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import toast from 'react-hot-toast';
import UserProfile from './helpers/UserProfile';
import { API_URL } from './helpers/constants';
import { crearUsuarioSchema } from './validations/usuarioSchema';
import { Field, Form, Formik } from 'formik';


const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const getToken = async (email, password) => {
    const res = await fetch(`${API_URL}/auth`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const { token } = await res.json();
    return token;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

  };

  const createErrorContent = (err) => {
    return (
      <Alert severity="error">
        <AlertTitle>Error - {err.message}</AlertTitle>
        {err.details?.map((detail, index) => {
          return <Typography key={index}>- {detail.message} </Typography>;
        })}
      </Alert>
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Formik
            initialValues={{ email: '', username: '', password: '' }}
            validate={(values) => {
              const errors = {};
              const validation = crearUsuarioSchema.validate(values);
              if (validation.error) {
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await fetch(`${API_URL}/usuarios/usuario`, {
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                });
                if (res.status >= 400) {
                  const resJson = await res.json();
                  toast.error(resJson.message);
                  setSubmitting(false);
                  return;
                }
                if (res.status === 201) {
                  toast.success('Cuenta creada 😃');
                  const { username, email } = await res.json();
                  const token = await getToken(email, values.password);
                  UserProfile.createSession(username, email, token);
                  navigate('/');
                }
              } catch (err) {
                toast.error('Error al crear la cuenta 😢');
                console.log(err);
              }

            }
            }
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Field
                  component={TextField}
                  name="username"
                  label="Nombre de usuario"
                  type="text"
                  autoComplete="username"
                  fullWidth
                  style={{
                    marginTop: '15px'
                  }}
                />
                <Field
                  component={TextField}
                  name="email"
                  label="Correo electrónico"
                  type="email"
                  autoComplete="email"
                  fullWidth
                  style={{
                    marginBottom: "15px", marginTop: '15px'
                  }}
                />
                < Field
                  component={TextField}
                  name="password"
                  label="Contraseña"
                  type="password"
                  fullWidth
                  style={{
                    marginBottom: "15px"
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Registrarse
                </Button>
              </Form>
            )}
          </Formik>
          <Grid container>
            <Grid item>
              <Link component={RouterLink} to="/signin" variant="body2">
                {'¿Ya tienes una cuenta? Inicia sesión'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};