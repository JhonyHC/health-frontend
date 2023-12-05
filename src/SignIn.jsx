// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from 'formik-mui';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import UserProfile from './helpers/UserProfile';
import toast from 'react-hot-toast';
import { API_URL } from './helpers/constants';
import { Field, Form, Formik } from 'formik';
import authSchema from './validations/authSchema';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        VitaVibe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

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
            Iniciar Sesión
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              const validation = authSchema.validate(values);
              if (validation.error) {
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {

              fetch(`${API_URL}/auth`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              }).then((res) => res.json())
                .then(async (value) => {
                  if (value.code) {
                    toast.error(value.message);
                    setSubmitting(false);
                    return;
                  }
                  await UserProfile.createSession('', values.email, value.token);
                  toast.success('¡Bienvenido!');
                  navigate('/');
                })
                .catch((err) => {
                  toast.error('Lo sentimos, hubo un error en el servidor 😢');
                  console.log(err);
                  setSubmitting(false);
                });
            }
            }
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
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
                  autoComplete="current-password"
                  fullWidth
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Iniciar sesión
                </Button>
              </Form>
            )}
          </Formik>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/" variant="body2">
                Volver al inicio
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                {"¿No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
          {/* </Box> */}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
