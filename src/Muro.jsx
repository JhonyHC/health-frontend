import React from 'react';
import {
  AppBar,
  Avatar,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Grid,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const MuroFacebook = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />

      
      <Container component="main" sx={{ flexGrow: 1, padding: '20px' }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {/* Lista de Publicaciones */}
            <Card>
              <CardHeader
                avatar={<Avatar src="URL_DE_LA_IMAGEN_DEL_PERFIL" />}
                title="Nombre del Usuario"
                subheader="Usuario@facebook.com"
              />
              <CardContent>
                {/* Aquí puedes mostrar las publicaciones del usuario */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Contenido de la publicación...
                </Typography>
              </CardContent>
            </Card>
            <br />
            <Card>
              <CardHeader
                avatar={<Avatar src="URL_DE_LA_IMAGEN_DEL_PERFIL" />}
                title="Nombre del Usuario"
                subheader="Usuario@facebook.com"
              />
              <CardContent>
                {/* Aquí puedes mostrar las publicaciones del usuario */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Contenido de la publicación...
                </Typography>
              </CardContent>
            </Card>
            <br />
            <Card>
              <CardHeader
                avatar={<Avatar src="URL_DE_LA_IMAGEN_DEL_PERFIL" />}
                title="Nombre del Usuario"
                subheader="Usuario@facebook.com"
              />
              <CardContent>
                {/* Aquí puedes mostrar las publicaciones del usuario */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Contenido de la publicación...
                </Typography>
              </CardContent>
            </Card>

            {/* Repite este bloque para más publicaciones */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Lista de Seguidores */}
            <Card>
              <CardHeader title="Seguidores" />
              <CardContent>
                {/* Aquí puedes mostrar la lista de seguidores */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Seguidor 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Seguidor 1
                </Typography>

                {/* Repite este bloque para más seguidores */}
              </CardContent>
            </Card>
            <br />
            <Card>
              <CardHeader title="Seguidores" />
              <CardContent>
                {/* Aquí puedes mostrar la lista de seguidores */}
                <Typography variant="body2" color="textSecondary" component="p">
                  Seguidor 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Seguidor 1
                </Typography>

                {/* Repite este bloque para más seguidores */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MuroFacebook;
