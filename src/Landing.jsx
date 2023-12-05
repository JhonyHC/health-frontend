import { Box, Container, CssBaseline, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

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
              Bienvenido a <Typography variant='h2' component="span" sx={{ color: '#1976d2', fontWeight: 'bold' }}>VitaVibe</Typography>
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              Una red social de salud y ejercicio.
            </Typography>
          </Box>
          <Button component={RouterLink} to="/signin" variant="contained">Iniciar sesión</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Landing;
