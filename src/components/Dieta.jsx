import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  TextField,
  List,
  ListItem,
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
  tipoDieta: '',
  calorias: '',
  proteinas: '',
  carbohidratos: '',
  grasas: '',
  fibra: '',
  imagen: '',
};

const initialData = [
  {
    nombre: 'Comida 1',
    descripcion: 'Descripción de la comida 1',
    tipoDieta: 'Tipo A',
    calorias: '300',
    proteinas: '10g',
    carbohidratos: '50g',
    grasas: '5g',
    fibra: '3g',
    imagen: 'url_imagen_1',
  },
  {
    nombre: 'Comida 2',
    descripcion: 'Descripción de la comida 2',
    tipoDieta: 'Tipo B',
    calorias: '400',
    proteinas: '15g',
    carbohidratos: '40g',
    grasas: '8g',
    fibra: '4g',
    imagen: 'url_imagen_2',
  },
];

const DietList = () => {
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
                Tipo de Dieta: {entry.tipoDieta}
              </Typography>
              <Typography color="text.secondary">Calorías: {entry.calorias}</Typography>
              <Typography color="text.secondary">Proteínas: {entry.proteinas}</Typography>
              <Typography color="text.secondary">Carbohidratos: {entry.carbohidratos}</Typography>
              <Typography color="text.secondary">Grasas: {entry.grasas}</Typography>
              <Typography color="text.secondary">Fibra: {entry.fibra}</Typography>
              {/* Puedes agregar más campos aquí según tus necesidades */}
            </CardContent>
          </Card>
        ))}
      </List>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Entrada de Dieta</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
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
            label="Tipo de Dieta"
            fullWidth
            value={newEntry.tipoDieta}
            onChange={(e) => handleInputChange('tipoDieta', e.target.value)}
          />
          <TextField
            label="Calorías"
            fullWidth
            value={newEntry.calorias}
            onChange={(e) => handleInputChange('calorias', e.target.value)}
          />
          <TextField
            label="Proteínas"
            fullWidth
            value={newEntry.proteinas}
            onChange={(e) => handleInputChange('proteinas', e.target.value)}
          />
          <TextField
            label="Carbohidratos"
            fullWidth
            value={newEntry.carbohidratos}
            onChange={(e) => handleInputChange('carbohidratos', e.target.value)}
          />
          <TextField
            label="Grasas"
            fullWidth
            value={newEntry.grasas}
            onChange={(e) => handleInputChange('grasas', e.target.value)}
          />
          <TextField
            label="Fibra"
            fullWidth
            value={newEntry.fibra}
            onChange={(e) => handleInputChange('fibra', e.target.value)}
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

export default DietList;

