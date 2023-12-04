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
  Skeleton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import ejercicioSchema from '../validations/ejercicioSchema';
import { getData, postData } from '../helpers/ApiCalls';
import toast from 'react-hot-toast';
import CardSinEntradas from './CardSinEntradas';

const initialValues = {
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

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    getData('/ejercicio').then((data) => {
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
        {entries ?
          (
            entries.length === 0
              ?
              <CardSinEntradas />
              :
              entries.map((entry, index) => (
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
              ))
          )
          :
          <Skeleton variant='rectangular' width={'100%'} height={200} />
        }
      </List>

      <Dialog open={openDialog} fullWidth maxWidth="sm" onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Ejercicio</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              const validation = ejercicioSchema.validate(values);
              if (validation.error) {
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              postData('/ejercicio', values)
                .then(data => {
                  setEntries([...entries, data]);
                  setOpenDialog(false);
                  setSubmitting(false);
                  toast.success('Ejercicio creado 💪');
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
                    name="nombre"
                    label="Nombre del Ejercicio"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="descripcion"
                    label="Descripción"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="tipoDeEjercicio"
                    label="Tipo de Ejercicio"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="duracionEstimada"
                    label="Duración Estimada (minutos)"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="grupoMuscularTrabajado"
                    label="Grupo Muscular Trabajado"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="nivelDeDificultad"
                    label="Nivel de Dificultad"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="caloriasQuemadas"
                    label="Calorías Quemadas"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="imagenDelEjercicio"
                    label="Imagen del Ejercicio (URL)"
                    type="text"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="imagen"
                    label="Imagen (URL)"
                    type="text"
                    fullWidth
                  />
                  <Button variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}>
                    Agregar
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

export default ExerciseComponent;
