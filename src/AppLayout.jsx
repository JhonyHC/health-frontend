import { Box, Container, CssBaseline, Stack } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import BasicCard from "./BasicCard";
import { Toaster } from "react-hot-toast";

function AppLayout() {
    
    return (
        <div>
        <Box minHeight="100vh" maxWidth="100vw">
            <CssBaseline />
            <ResponsiveAppBar />
            <Container maxWidth="md" sx={{ pt: '30px' }}>
                <Stack spacing={4}>
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                    <BasicCard></BasicCard>
                </Stack>
            </Container>
        </Box>
        <Toaster />
        </div>
    );
}

export default AppLayout;