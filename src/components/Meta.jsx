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
  tipoMeta: '',
  valorMeta: '',
  fechaLimite: '',
  descripcionMeta: '',
  estadoMeta: '',
  progreso: '',
};

const initialData = [
  {
    tipoMeta: 'Pérdida de Peso',
    valorMeta: '5 kg',
    fechaLimite: '2023-12-31',
    descripcionMeta: 'Perder 5 kg para el fin de año',
    estadoMeta: 'En Progreso',
    progreso: '2 kg',
  },
  {
    tipoMeta: 'Aumento de Masa Muscular',
    valorMeta: '3 kg',
    fechaLimite: '2023-11-30',
    descripcionMeta: 'Ganar 3 kg de masa muscular',
    estadoMeta: 'Completado',
    progreso: '3 kg',
  },
];

const GoalComponent = () => {
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
                Meta de Salud
              </Typography>
              <Typography color="text.secondary">
                Tipo de Meta: {entry.tipoMeta}
              </Typography>
              <Typography color="text.secondary">
                Valor de la Meta: {entry.valorMeta}
              </Typography>
              <Typography color="text.secondary">
                Fecha Límite: {entry.fechaLimite}
              </Typography>
              <Typography color="text.secondary">
                Descripción de la Meta: {entry.descripcionMeta}
              </Typography>
              <Typography color="text.secondary">
                Estado de la Meta: {entry.estadoMeta}
              </Typography>
              <Typography color="text.secondary">
                Progreso: {entry.progreso}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Meta de Salud</DialogTitle>
        <DialogContent>
          <TextField
            label="Tipo de Meta"
            fullWidth
            value={newEntry.tipoMeta}
            onChange={(e) => handleInputChange('tipoMeta', e.target.value)}
          />
          <TextField
            label="Valor de la Meta"
            fullWidth
            value={newEntry.valorMeta}
            onChange={(e) => handleInputChange('valorMeta', e.target.value)}
          />
          <TextField
            label="Fecha Límite"
            fullWidth
            value={newEntry.fechaLimite}
            onChange={(e) => handleInputChange('fechaLimite', e.target.value)}
          />
          <TextField
            label="Descripción de la Meta"
            fullWidth
            value={newEntry.descripcionMeta}
            onChange={(e) => handleInputChange('descripcionMeta', e.target.value)}
          />
          <TextField
            label="Estado de la Meta"
            fullWidth
            value={newEntry.estadoMeta}
            onChange={(e) => handleInputChange('estadoMeta', e.target.value)}
          />
          <TextField
            label="Progreso"
            fullWidth
            value={newEntry.progreso}
            onChange={(e) => handleInputChange('progreso', e.target.value)}
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

export default GoalComponent;
