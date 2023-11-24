import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const initialEntry = {
  circunferenciaCintura: '',
  presionArterial: '',
  imc: '',
  peso: '',
  altura: '',
  frecuenciaCardiaca: '',
  temperaturaCorporal: '',
  glucosaEnSangre: '',
  colesterolHDL: '',
  colesterolLDL: '',
  frecuenciaRespiratoria: '',
};

const initialData = [
  {
    circunferenciaCintura: '80 cm',
    presionArterial: '120/80 mmHg',
    imc: '22.5',
    peso: '70 kg',
    altura: '175 cm',
    frecuenciaCardiaca: '70 bpm',
    temperaturaCorporal: '36.5°C',
    glucosaEnSangre: '90 mg/dL',
    colesterolHDL: '50 mg/dL',
    colesterolLDL: '120 mg/dL',
    frecuenciaRespiratoria: '18 rpm',
  },
  {
    circunferenciaCintura: '75 cm',
    presionArterial: '110/70 mmHg',
    imc: '20.5',
    peso: '65 kg',
    altura: '170 cm',
    frecuenciaCardiaca: '75 bpm',
    temperaturaCorporal: '36.8°C',
    glucosaEnSangre: '85 mg/dL',
    colesterolHDL: '55 mg/dL',
    colesterolLDL: '110 mg/dL',
    frecuenciaRespiratoria: '20 rpm',
  },
];

const MetricComponent = () => {
  const [entries, setEntries] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(initialEntry);
  const [newEntry, setNewEntry] = useState(initialEntry);

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    setEntries(initialData);
  }, []);

  const handleCardClick = (entry) => {
    setSelectedEntry(entry);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetailsDialog = () => {
    setOpenDetailsDialog(false);
  };

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleInputChange = (field, value) => {
    setNewEntry({ ...newEntry, [field]: value });
  };

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry(initialEntry);
    setOpenAddDialog(false);
  };

  return (
    <div>
    

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Agregar Entrada
      </Button>

      <List>
        {entries.map((entry, index) => (
          <ListItem key={index} style={{ margin: '10px 0', cursor: 'pointer' }}>
            <Card onClick={() => handleCardClick(entry)}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Métricas de Salud
                </Typography>
                <Typography color="text.secondary">
                  Circunferencia de Cintura: {entry.circunferenciaCintura}
                </Typography>
                <Typography color="text.secondary">
                  Presión Arterial: {entry.presionArterial}
                </Typography>
                <Typography color="text.secondary">
                  Índice de Masa Corporal (IMC): {entry.imc}
                </Typography>
                <Typography color="text.secondary">Peso: {entry.peso}</Typography>
                <Typography color="text.secondary">Altura: {entry.altura}</Typography>
                <Typography color="text.secondary">
                  Frecuencia Cardíaca: {entry.frecuenciaCardiaca}
                </Typography>
                <Typography color="text.secondary">
                  Temperatura Corporal: {entry.temperaturaCorporal}
                </Typography>
                <Typography color="text.secondary">
                  Glucosa en Sangre: {entry.glucosaEnSangre}
                </Typography>
                <Typography color="text.secondary">
                  Colesterol HDL: {entry.colesterolHDL}
                </Typography>
                <Typography color="text.secondary">
                  Colesterol LDL: {entry.colesterolLDL}
                </Typography>
                <Typography color="text.secondary">
                  Frecuencia Respiratoria: {entry.frecuenciaRespiratoria}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>

      {/* Diálogo para detalles */}
      <Dialog open={openDetailsDialog} onClose={handleCloseDetailsDialog}>
        <DialogTitle>Detalles de Métricas de Salud</DialogTitle>
        <DialogContent>
          <Typography color="text.secondary">
            Circunferencia de Cintura: {selectedEntry.circunferenciaCintura}
          </Typography>
          <Typography color="text.secondary">
            Presión Arterial: {selectedEntry.presionArterial}
          </Typography>
          <Typography color="text.secondary">
            Índice de Masa Corporal (IMC): {selectedEntry.imc}
          </Typography>
          <Typography color="text.secondary">Peso: {selectedEntry.peso}</Typography>
          <Typography color="text.secondary">Altura: {selectedEntry.altura}</Typography>
          <Typography color="text.secondary">
            Frecuencia Cardíaca: {selectedEntry.frecuenciaCardiaca}
          </Typography>
          <Typography color="text.secondary">
            Temperatura Corporal: {selectedEntry.temperaturaCorporal}
          </Typography>
          <Typography color="text.secondary">
            Glucosa en Sangre: {selectedEntry.glucosaEnSangre}
          </Typography>
          <Typography color="text.secondary">
            Colesterol HDL: {selectedEntry.colesterolHDL}
          </Typography>
          <Typography color="text.secondary">
            Colesterol LDL: {selectedEntry.colesterolLDL}
          </Typography>
          <Typography color="text.secondary">
            Frecuencia Respiratoria: {selectedEntry.frecuenciaRespiratoria}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetailsDialog}>Cerrar</Button>
        </DialogActions>
      </Dialog>

      {/* Diálogo para agregar nueva métrica */}
      <Dialog open={openAddDialog} onClose={handleCloseAddDialog}>
        <DialogTitle>Agregar Métrica de Salud</DialogTitle>
        <DialogContent>
          {/* Campos de entrada para agregar nueva métrica */}
          <TextField
            label="Circunferencia de Cintura"
            fullWidth
            value={newEntry.circunferenciaCintura}
            onChange={(e) => handleInputChange('circunferenciaCintura', e.target.value)}
          />
          <TextField
            label="Presión Arterial"
            fullWidth
            value={newEntry.presionArterial}
            onChange={(e) => handleInputChange('presionArterial', e.target.value)}
          />
          <TextField
            label="Índice de Masa Corporal (IMC)"
            fullWidth
            value={newEntry.imc}
            onChange={(e) => handleInputChange('imc', e.target.value)}
          />
          <TextField
            label="Peso"
            fullWidth
            value={newEntry.peso}
            onChange={(e) => handleInputChange('peso', e.target.value)}
          />
          <TextField
            label="Altura"
            fullWidth
            value={newEntry.altura}
            onChange={(e) => handleInputChange('altura', e.target.value)}
          />
          <TextField
            label="Frecuencia Cardíaca"
            fullWidth
            value={newEntry.frecuenciaCardiaca}
            onChange={(e) => handleInputChange('frecuenciaCardiaca', e.target.value)}
          />
          <TextField
            label="Temperatura Corporal"
            fullWidth
            value={newEntry.temperaturaCorporal}
            onChange={(e) => handleInputChange('temperaturaCorporal', e.target.value)}
          />
          <TextField
            label="Glucosa en Sangre"
            fullWidth
            value={newEntry.glucosaEnSangre}
            onChange={(e) => handleInputChange('glucosaEnSangre', e.target.value)}
          />
          <TextField
            label="Colesterol HDL"
            fullWidth
            value={newEntry.colesterolHDL}
            onChange={(e) => handleInputChange('colesterolHDL', e.target.value)}
          />
          <TextField
            label="Colesterol LDL"
            fullWidth
            value={newEntry.colesterolLDL}
            onChange={(e) => handleInputChange('colesterolLDL', e.target.value)}
          />
          <TextField
            label="Frecuencia Respiratoria"
            fullWidth
            value={newEntry.frecuenciaRespiratoria}
            onChange={(e) => handleInputChange('frecuenciaRespiratoria', e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog}>Cancelar</Button>
          <Button onClick={handleAddEntry} variant="contained" color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MetricComponent;
