import { useState, useEffect } from 'react';
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
  MenuItem,
  Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import dietaSchema from '../validations/dietaSchema';

const initialValues = {
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

const tiposDieta = [
  'Mediteránea',
  'DASH',
  'Flexitariana',
  'Vegana',
  'Vegetariana',
  'Paleo',
  'Cetogénica',
  'Sin Gluten',
  'Baja en Carbohidratos',
  'Baja en Grasas',
  'Otra',
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

      <Dialog open={openDialog} fullWidth maxWidth="sm" onClose={() => setOpenDialog(false)}>
        <DialogTitle>Agregar Entrada de Dieta</DialogTitle>
        <DialogContent >
          <Formik
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              const validation = dietaSchema.validate(values);
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
                  {/* <Field
                  component={TextField}
                  name="tipoDieta"
                  label="Tipo de Dieta"
                  type="text"
                  fullWidth
                /> */}
                  <Field
                    component={Select}
                    name="tipoDieta"
                    label="Tipo de Dieta"
                    sx={{ width: "100%" }}
                  >
                    {
                      tiposDieta.map((tipoDieta) => (
                        <MenuItem key={tipoDieta} value={tipoDieta}>{tipoDieta}</MenuItem>
                      ))
                    }
                  </Field>
                  <Field
                    component={TextField}
                    name="calorias"
                    label="Calorías (gramos)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="proteinas"
                    label="Proteínas (gramos)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    label="Carbohidratos (gramos)"
                    name="carbohidratos"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="grasas"
                    label="Grasas (gramos)"
                    type="number"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    name="fibra"
                    label="Fibra (gramos)"
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
                    onClick={submitForm}>Agregar
                  </Button>
                </Stack>
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

