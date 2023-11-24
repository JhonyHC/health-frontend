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
  nombre: '',
  descripcion: '',
  tipoDeEjercicio: '',
  duracionEstimada: '',
  grupoMuscularTrabajado: '',
  nivelDeDificultad: '',
  caloriasQuemadas: '',
  imagenDelEjercicio: '',
  imagen: '',
};

const initialData = [
  {
    nombre: 'Ejercicio 1',
    descripcion: 'Descripción del ejercicio 1',
    tipoDeEjercicio: 'Tipo A',
    duracionEstimada: '30 minutos',
    grupoMuscularTrabajado: 'Pecho',
    nivelDeDificultad: 'Intermedio',
    caloriasQuemadas: '200',
    imagenDelEjercicio: 'url_imagen_ejercicio_1',
    imagen: 'url_imagen_1',
  },
  {
    nombre: 'Ejercicio 2',
    descripcion: 'Descripción del ejercicio 2',
    tipoDeEjercicio: 'Tipo B',
    duracionEstimada: '45 minutos',
    grupoMuscularTrabajado: 'Piernas',
    nivelDeDificultad: 'Avanzado',
    caloriasQuemadas: '300',
    imagenDelEjercicio: 'url_imagen_ejercicio_2',
    imagen: 'url_imagen_2',
  },
];

const ExerciseComponent = () => {
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
                {entry.nombre}
              </Typography>
              <Typography color="text.secondary">
                Descripción: {entry.descripcion}
              </Typography>
              <Typography color="text.secondary">
                Tipo de Ejercicio: {entry.tipoDeEjercicio}
              </Typography>
              <Typography color="text.secondary">
                Duración Estimada: {entry.duracionEstimada}
              </Typography>
              <Typography color="text.secondary">
                Grupo Muscular Trabajado: {entry.grupoMuscularTrabajado}
              </Typography>
              <Typography color="text.secondary">
                Nivel de Dificultad: {entry.nivelDeDificultad}
              </Typography>
              <Typography color="text.secondary">
                Calorías Quemadas: {entry.caloriasQuemadas}
              </Typography>
              <Typography color="text.secondary">
                Imagen del Ejercicio: {entry.imagenDelEjercicio}
              </Typography>
              <Typography color="text.secondary">Imagen: {entry.imagen}</Typography>
            </CardContent>
          </Card>
        ))}
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Ejercicio</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre del Ejercicio"
            fullWidth
            value={newEntry.nombre}
            onChange={(e) => handleInputChange('nombre', e.target.value)}
          />
          <TextField
            label="Descripción"
            fullWidth
            value={newEntry.descripcion}
            onChange={(e) => handleInputChange('descripcion', e.target.value)}
          />
          <TextField
            label="Tipo de Ejercicio"
            fullWidth
            value={newEntry.tipoDeEjercicio}
            onChange={(e) => handleInputChange('tipoDeEjercicio', e.target.value)}
          />
          <TextField
            label="Duración Estimada"
            fullWidth
            value={newEntry.duracionEstimada}
            onChange={(e) => handleInputChange('duracionEstimada', e.target.value)}
          />
          <TextField
            label="Grupo Muscular Trabajado"
            fullWidth
            value={newEntry.grupoMuscularTrabajado}
            onChange={(e) => handleInputChange('grupoMuscularTrabajado', e.target.value)}
          />
          <TextField
            label="Nivel de Dificultad"
            fullWidth
            value={newEntry.nivelDeDificultad}
            onChange={(e) => handleInputChange('nivelDeDificultad', e.target.value)}
          />
          <TextField
            label="Calorías Quemadas"
            fullWidth
            value={newEntry.caloriasQuemadas}
            onChange={(e) => handleInputChange('caloriasQuemadas', e.target.value)}
          />
          <TextField
            label="Imagen del Ejercicio (URL)"
            fullWidth
            value={newEntry.imagenDelEjercicio}
            onChange={(e) => handleInputChange('imagenDelEjercicio', e.target.value)}
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

export default ExerciseComponent;
