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
  MenuItem,
  Stack,
  Skeleton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import metaSchema from '../validations/metaSchema';
import { getData, postData } from '../helpers/ApiCalls';
import toast from 'react-hot-toast';
import CardSinEntradas from './CardSinEntradas';

const today = new Date().toISOString().split('T')[0];

const initialValues = {
  tipoMeta: '',
  valorMeta: '',
  fechaLimite: today,
  descripcionMeta: '',
  estadoMeta: 'Sin Comenzar',
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

const estadoMeta = [
  'Sin Comenzar',
  'En Progreso',
  'Completado',
];

const GoalComponent = () => {
  const [entries, setEntries] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    getData('/meta').then((data) => {
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
        {
          entries ?
            (
              entries.length === 0
                ?
                <CardSinEntradas />
                :
                entries.map((entry, index) => (
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
                ))
            )
            :
            <Skeleton variant='rectangular' width={'100%'} height={200} />
        }
      </List>

      <Dialog open={openDialog} fullWidth maxWidth="sm" onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Meta de Salud</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              const validation = metaSchema.validate(values);
              if (validation.error) {
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              postData('/meta', values)
                .then(data => {
                  setEntries([...entries, data]);
                  setOpenDialog(false);
                  setSubmitting(false);
                  toast.success('Meta creada 🏁');
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
                    name="tipoMeta"
                    label="Tipo de Meta"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="valorMeta"
                    label="Valor de la Meta"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="fechaLimite"
                    label="Fecha Límite"
                    type="date"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="descripcionMeta"
                    label="Descripción de la Meta"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={Select}
                    name="estadoMeta"
                    label="Estado de la Meta"
                    sx={{ width: "100%" }}
                  >
                    {
                      estadoMeta.map((estado) => (
                        <MenuItem key={estado} value={estado}>{estado}</MenuItem>
                      ))
                    }
                  </Field>
                  <Field
                    component={TextField}
                    name="progreso"
                    label="Progreso"
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
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GoalComponent;
