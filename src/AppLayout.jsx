import { Box, Container, CssBaseline } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Outlet } from 'react-router-dom';

function AppLayout({ setIsLogged }) {
  return (
    <div>
      <Box minHeight="100vh" maxWidth="100vw">
        <CssBaseline />
        <ResponsiveAppBar setIsLogged={setIsLogged} />
        <Container maxWidth="md" sx={{ pt: '30px' }}>
          <Outlet />
        </Container>
      </Box>
    </div>
  );
}

export default AppLayout;