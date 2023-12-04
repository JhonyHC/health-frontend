import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Typography,
  TextField,
} from '@mui/material';

const Profile = () => {
  // Estado para gestionar las publicaciones
  const [publicaciones, setPublicaciones] = useState([
    {
      titulo: 'Publicación 1',
      contenido: 'Contenido de la publicación 1.',
      likes: 10,
      imagen: 'URL_DE_LA_IMAGEN',
      isActive: true,
      fechaCreacion: '2023-01-01',
    },
    // Puedes agregar más publicaciones según tus necesidades
  ]);

  // Estado para el formulario de nueva publicación
  const [nuevaPublicacion, setNuevaPublicacion] = useState({
    titulo: '',
    contenido: '',
    likes: 0,
    imagen: '',
    isActive: true,
    fechaCreacion: '',
  });

  // Manejar cambios en el formulario de nueva publicación
  const handleNuevaPublicacionChange = (event) => {
    setNuevaPublicacion({
      ...nuevaPublicacion,
      [event.target.name]: event.target.value,
    });
  };

  // Manejar el envío del formulario de nueva publicación
  const handleNuevaPublicacionSubmit = (event) => {
    event.preventDefault();
    setPublicaciones([...publicaciones, nuevaPublicacion]);
    setNuevaPublicacion({
      titulo: '',
      contenido: '',
      likes: 0,
      imagen: '',
      isActive: true,
      fechaCreacion: '',
    });
  };

  // Manejar el clic en el botón de "Me gusta"
  const handleMeGustaClick = (index) => {
    const nuevasPublicaciones = [...publicaciones];
    nuevasPublicaciones[index].likes += 1;
    setPublicaciones(nuevasPublicaciones);
  };

  return (
    <div>
      
      {/* <Card>
      <CardHeader
        avatar={<Avatar src="URL_DE_LA_IMAGEN_DEL_PERFIL" />}
        title="Nombre del Usuario"
        subheader="Usuario@facebook.com"
      />
   
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Descripción del perfil. Puedes agregar cualquier información adicional aquí.
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Amigos: 500
        </Typography>
      </CardContent>
      <CardContent>
        <Button variant="contained" color="primary">
          Unirse a la Comunidad
        </Button>
      </CardContent>
     
    
   
   
   


    </Card>
    <br /> */}
    <Card>
    <CardContent>
        <Typography variant="h6" gutterBottom>
          Añadir Publicación
        </Typography>
        <form onSubmit={handleNuevaPublicacionSubmit}>
          <TextField
            label="Título"
            name="titulo"
            value={nuevaPublicacion.titulo}
            onChange={handleNuevaPublicacionChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contenido"
            name="contenido"
            value={nuevaPublicacion.contenido}
            onChange={handleNuevaPublicacionChange}
            fullWidth
            multiline
            margin="normal"
          />
          {/* Puedes agregar más campos según tus necesidades */}
          <Button type="submit" variant="contained" color="primary">
            Publicar
          </Button>
        </form>
      </CardContent>
        </Card>
    <br />
    <Card>
    <CardContent>
        <Typography variant="h6" gutterBottom>
          Publicaciones
        </Typography>
        {/* Lista de Publicaciones */}
        {publicaciones.map((publicacion, index) => (
          <Card key={index} style={{ marginBottom: '16px' }}>
            <CardHeader
              title={publicacion.titulo}
              subheader={`Publicado el ${publicacion.fechaCreacion}`}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {publicacion.contenido}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleMeGustaClick(index)}
              >
                Me gusta ({publicacion.likes})
              </Button>
            </CardActions>
          </Card>
        ))}
      </CardContent>
      
    </Card>
    </div>
  );
};

export default Profile;
