import { useState, useEffect } from 'react';
import { API_URL } from '../helpers/constants';
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
  Skeleton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Formik, Form, Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import dietaSchema from '../validations/dietaSchema';
import UserProfile from '../helpers/UserProfile';
import toast from 'react-hot-toast';
import CardSinEntradas from './CardSinEntradas';
import {getData, postData} from '../helpers/ApiCalls';

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
  const [entries, setEntries] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Mostrar datos iniciales al cargar el componente
    getData('/dieta').then((data) => {
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
              entries.length === 0 ?
                <CardSinEntradas />
              : entries.map((entry, index) => (
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
              ))
            )
            :
            <Skeleton variant='rectangular' width={'100%'} height={200} />
        }
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
                validation.error.details.forEach((err) => {
                  errors[err.context.label] = err.message;
                });
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              postData('/dieta', values)
                .then(data => {
                  setEntries([...entries, values]);
                  setOpenDialog(false);
                  setSubmitting(false);
                  toast.success('Dieta creada 🍉');
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

