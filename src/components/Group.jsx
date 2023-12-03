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
  FormGroup,
  FormControlLabel,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { Checkbox, TextField } from 'formik-mui';
import comunidadSchema from '../validations/comunidadSchema';

const today = new Date().toISOString().split('T')[0];

const initialValues = {
  nombreGrupo: '',
  descripcion: '',
  fechaCreacion: today,
  // numeroMiembros: '',
  isActive: false,
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

      <Dialog open={openDialog} fullWidth maxWidth="sm" onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Grupo</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              const validation = comunidadSchema.validate(values);
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
                    name="nombreGrupo"
                    label="Nombre del Grupo"
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
                  <FormGroup>
                    <FormControlLabel control={
                      <Field
                        component={Checkbox}
                        name="isActive"
                        type="checkbox"
                      />
                    } label="Activo (Sí/No)" />
                  </FormGroup>
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
                    onClick={submitForm}>Agregar
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          {/* <TextField
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
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GroupComponent;
