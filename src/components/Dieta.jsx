import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

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
          <Formik
            initialValues={{
              nombre: '',
              descripcion: '',
              tipoDieta: '',
              calorias: '',
              proteinas: '',
              carbohidratos: '',
              grasas: '',
              fibra: '',
              imagen: '',
            }}
            validate={(values) => {
              const errors = {};

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
                <Field
                  component={TextField}
                  name="nombre"
                  label="Nombre"
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
                  name="tipoDieta"
                  label="Tipo de Dieta"
                  type="text"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="calorias"
                  label="Calorías"
                  type="number"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="proteinas"
                  label="Proteínas"
                  type="number"
                  fullWidth
                />
                <Field
                  component={TextField}
                  label="Carbohidratos"
                  name="carbohidratos"
                  type="number"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="grasas"
                  label="Grasas"
                  type="number"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="fibra"
                  label="Fibra"
                  type="number"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="url"
                  label="Imagen (URL)"
                  type="url"
                  fullWidth
                />
                <Button variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}>Agregar</Button>
              </Form>
            )}
          </Formik>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
          {/* <Button onClick={handleAddEntry} variant="contained" color="primary">
            Agregar
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DietList;

