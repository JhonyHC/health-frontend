import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  TextField,
  List,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialEntry = {
  nombreGrupo: '',
  descripcion: '',
  fechaCreacion: '',
  numeroMiembros: '',
  isActive: '',
  imagen: '',
};

const initialData = [
  {
    nombreGrupo: 'Grupo 1',
    descripcion: 'Descripción del grupo 1',
    fechaCreacion: '2023-01-01',
    numeroMiembros: '5',
    isActive: true,
    imagen: 'url_imagen_1',
  },
  {
    nombreGrupo: 'Grupo 2',
    descripcion: 'Descripción del grupo 2',
    fechaCreacion: '2023-02-01',
    numeroMiembros: '8',
    isActive: false,
    imagen: 'url_imagen_2',
  },
];

const GroupComponent = () => {
  const [entries, setEntries] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newEntry, setNewEntry] = useState(initialEntry);

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    setEntries(initialData);
  }, []);

  const handleInputChange = (field, value) => {
    setNewEntry({ ...newEntry, [field]: value });
  };

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry(initialEntry);
    setOpenDialog(false);
  };

  return (
    <div>
   

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpenDialog(true)}
      >
        Agregar Entrada
      </Button>

      <List>
        {entries.map((entry, index) => (
          <Card key={index} style={{ margin: '10px 0' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {entry.nombreGrupo}
              </Typography>
              <Typography color="text.secondary">
                Descripción: {entry.descripcion}
              </Typography>
              <Typography color="text.secondary">
                Fecha de Creación: {entry.fechaCreacion}
              </Typography>
              <Typography color="text.secondary">
                Número de Miembros: {entry.numeroMiembros}
              </Typography>
              <Typography color="text.secondary">Activo: {entry.isActive ? 'Sí' : 'No'}</Typography>
              <Typography color="text.secondary">Imagen: {entry.imagen}</Typography>
            </CardContent>
          </Card>
        ))}
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Grupo</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre del Grupo"
            fullWidth
            value={newEntry.nombreGrupo}
            onChange={(e) => handleInputChange('nombreGrupo', e.target.value)}
          />
          <TextField
            label="Descripción"
            fullWidth
            value={newEntry.descripcion}
            onChange={(e) => handleInputChange('descripcion', e.target.value)}
          />
          <TextField
            label="Fecha de Creación"
            fullWidth
            value={newEntry.fechaCreacion}
            onChange={(e) => handleInputChange('fechaCreacion', e.target.value)}
          />
          <TextField
            label="Número de Miembros"
            fullWidth
            value={newEntry.numeroMiembros}
            onChange={(e) => handleInputChange('numeroMiembros', e.target.value)}
          />
          <TextField
            label="Activo (Sí/No)"
            fullWidth
            value={newEntry.isActive}
            onChange={(e) => handleInputChange('isActive', e.target.value)}
          />
          <TextField
            label="Imagen (URL)"
            fullWidth
            value={newEntry.imagen}
            onChange={(e) => handleInputChange('imagen', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          <Button onClick={handleAddEntry} variant="contained" color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GroupComponent;
