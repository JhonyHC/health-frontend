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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus obcaecati non, odit dolorum cupiditate voluptas culpa sed labore nobis in. Quia repellendus laborum amet reiciendis, distinctio eos fugiat veniam! Voluptas.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus obcaecati non, odit dolorum cupiditate voluptas culpa sed labore nobis in. Quia repellendus laborum amet reiciendis, distinctio eos fugiat veniam! Voluptas.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus obcaecati non, odit dolorum cupiditate voluptas culpa sed labore nobis in. Quia repellendus laborum amet reiciendis, distinctio eos fugiat veniam! Voluptas.
                </Typography>
              </CardContent>
            </Card>

            {/* Repite este bloque para más publicaciones */}
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Lista de Seguidores */}
            <Card>
              <CardHeader title="Comunidad" />
              <CardContent>
                {/* Aquí puedes mostrar la lista de seguidores */}
                <Typography variant="body2" color="textSecondary" component="p">
                 Nuevas Publicaciones: Los Chinos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Nuevas Publicaciones: Viva chivas team
                </Typography>

                {/* Repite este bloque para más seguidores */}
              </CardContent>
            </Card>
            <br />
            <Card>
              <CardHeader title="Proximas metas" />
              <CardContent>
                {/* Aquí puedes mostrar la lista de seguidores */}
                <Typography variant="body2" color="textSecondary" component="p">
                  4 km
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Bajar 2 kg
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
