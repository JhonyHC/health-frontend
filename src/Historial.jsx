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
  alergias: '',
  enfermedadesCronicas: '',
  cirugiasAnteriores: '',
  medicamentosTomados: '',
};

const initialData = [
  {
    alergias: 'Polen',
    enfermedadesCronicas: 'Hipertensión',
    cirugiasAnteriores: 'Apéndice',
    medicamentosTomados: 'Aspirina',
  },
  {
    alergias: 'Ninguna',
    enfermedadesCronicas: 'Diabetes',
    cirugiasAnteriores: 'Cataratas',
    medicamentosTomados: 'Insulina',
  },
];

const HistoryComponent = () => {
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
                Historial Médico
              </Typography>
              <Typography color="text.secondary">
                Alergias: {entry.alergias}
              </Typography>
              <Typography color="text.secondary">
                Enfermedades Crónicas: {entry.enfermedadesCronicas}
              </Typography>
              <Typography color="text.secondary">
                Cirugías Anteriores: {entry.cirugiasAnteriores}
              </Typography>
              <Typography color="text.secondary">
                Medicamentos Tomados: {entry.medicamentosTomados}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Entrada al Historial Médico</DialogTitle>
        <DialogContent>
          <TextField
            label="Alergias"
            fullWidth
            value={newEntry.alergias}
            onChange={(e) => handleInputChange('alergias', e.target.value)}
          />
          <TextField
            label="Enfermedades Crónicas"
            fullWidth
            value={newEntry.enfermedadesCronicas}
            onChange={(e) => handleInputChange('enfermedadesCronicas', e.target.value)}
          />
          <TextField
            label="Cirugías Anteriores"
            fullWidth
            value={newEntry.cirugiasAnteriores}
            onChange={(e) => handleInputChange('cirugiasAnteriores', e.target.value)}
          />
          <TextField
            label="Medicamentos Tomados"
            fullWidth
            value={newEntry.medicamentosTomados}
            onChange={(e) => handleInputChange('medicamentosTomados', e.target.value)}
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

export default HistoryComponent;
