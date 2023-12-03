import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  List,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import historialSchema from '../validations/historialSchema';

const initialValues = {
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

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    setEntries(initialData);
  }, []);

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

      <Dialog open={openDialog} fullWidth maxWidth="sm" onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Entrada al Historial Médico</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              const validation = historialSchema.validate(values);
              if (validation.error) {
                console.log(validation);
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
                setEntries([...entries, values]);
                setOpenDialog(false);
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Stack spacing={2} mt={1}>
                  <Field
                    component={TextField}
                    name="alergias"
                    label="Alergias"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="enfermedadesCronicas"
                    label="Enfermedades Crónicas"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="cirugiasAnteriores"
                    label="Cirugías Anteriores"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="medicamentosTomados"
                    label="Medicamentos Tomados"
                    type="text"
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
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HistoryComponent;
