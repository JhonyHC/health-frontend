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
  Stack,
  Skeleton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import metricaSchema from '../validations/metricaSchema';
import { getData, postData } from '../helpers/ApiCalls';
import toast from 'react-hot-toast';
import CardSinEntradas from './CardSinEntradas';

const initialValues = {
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
  const [selectedEntry, setSelectedEntry] = useState(initialValues);

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    getData('/metrica').then((data) => {
      if (!Array.isArray(data)) {
        throw new Error('No se pudo cargar los datos');
      }
      setEntries(data);
    }).catch((error) => {
      console.log(error);
      setEntries([]);
      toast.error('Error del servidor al cargar los datos 😢');
    });
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
        {
          entries ?
            (
              entries.length === 0
                ?
                <CardSinEntradas />
                :
                entries.map((entry, index) => (
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
                ))
            )
            :
            <Skeleton variant='rectangular' width={'100%'} height={200} />
        }
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
      <Dialog open={openAddDialog} fullWidth maxWidth="sm" onClose={handleCloseAddDialog}>
        <DialogTitle>Agregar Métrica de Salud</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              const validation = metricaSchema.validate(values);
              if (validation.error) {
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              postData('/metrica', values)
                .then(data => {
                  setEntries([...entries, data]);
                  setOpenAddDialog(false);
                  setSubmitting(false);
                  toast.success('Metrica creada 📐');
                }).catch((error) => {
                  console.log(error);
                  setSubmitting(false);
                });
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Stack spacing={2} mt={1}>
                  <Field
                    component={TextField}
                    name="circunferenciaCintura"
                    label="Circunferencia de Cintura (cm)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="presionArterial"
                    label="Presión Arterial (mmHg)"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="imc"
                    label="Índice de Masa Corporal (IMC)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="peso"
                    label="Peso (kg)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="altura"
                    label="Altura (cm)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="frecuenciaCardiaca"
                    label="Frecuencia Cardíaca (bpm)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="temperaturaCorporal"
                    label="Temperatura Corporal (°C)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="glucosaEnSangre"
                    label="Glucosa en Sangre (mg/dL)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="colesterolHDL"
                    label="Colesterol HDL (mg/dL)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="colesterolLDL"
                    label="Colesterol LDL (mg/dL)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="frecuenciaRespiratoria"
                    label="Frecuencia Respiratoria (rpm)"
                    type="number"
                    fullWidth
                  />
                  <Button variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}>Agregar
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MetricComponent;
