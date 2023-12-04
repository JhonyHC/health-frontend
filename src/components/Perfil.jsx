import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import UserProfile from "../helpers/UserProfile";


function Perfil() {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar src="URL_DE_LA_IMAGEN_DEL_PERFIL" />}
                title={UserProfile.getUsername()}
                subheader={UserProfile.getEmail()}
            />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Box component="b">Descripción del perfil.</Box> Proximamente...
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Box component="b">Amigos:</Box> Proximamente
                </Typography>
            </CardContent>
            {/* <CardContent>
                <Button variant="contained" color="primary">
                    Unirse a la Comunidad
                </Button>
            </CardContent> */}

        </Card>
    );
}

export default Perfil;