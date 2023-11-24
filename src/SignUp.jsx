// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import toast from 'react-hot-toast';
import UserProfile from './helpers/UserProfile';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const getToken = async (email, password) => {
    const res = await fetch('http://localhost:8080/auth', {
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
    const data = new FormData(event.currentTarget);
    const userData = {
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
    };

    try {
      setError(null);
      const res = await fetch('http://localhost:8080/usuarios/usuario', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      console.log(res);
      if (res.status >= 400) {
        const resJson = await res.json();
        console.log(resJson);
        setError(createErrorContent(resJson));
        return;
      }
      if (res.status === 201) {
        toast.success('Cuenta creada 😃');
        const { username, email, password } = await res.json();
        const token = await getToken(email, password);
        UserProfile.createSession(username, email, token);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createErrorContent = (err) => {
    return (
      <Alert severity="error">
        <AlertTitle>Error - {err.message}</AlertTitle>
        {err.details?.map((detail, index) => {
          console.log(detail);
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {error}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/signin" variant="body2">
                  {'Already have an account? Sign in'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
