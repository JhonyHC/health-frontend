import { Box, Container, CssBaseline, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Stack alignItems="center" spacing={3}>
          <Box>
            <Typography variant="h2" textAlign="center">
              Bienvenido a Health App
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Una red social de salud y ejercicio.
            </Typography>
          </Box>
          <Link to="signin">Iniciar sesión</Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Landing;
