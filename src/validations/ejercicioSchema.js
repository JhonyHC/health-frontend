import Joi from "joi";

const ejercicioSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow(null).allow(''),
  tipoDeEjercicio: Joi.string().allow(null).allow(''),
  duracionEstimada: Joi.number().integer().allow(null).allow(''),
  grupoMuscularTrabajado: Joi.string().allow(null).allow(''),
  nivelDeDificultad: Joi.number().integer().allow(null).allow(''),
  caloriasQuemadas: Joi.number().allow(null).allow(''),
  imagenDelEjercicio: Joi.string().allow(null).allow(''),
  imagen: Joi.string().allow(null).allow(''),
});

export default ejercicioSchema;