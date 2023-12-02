import Joi from "joi";

const actividadSchema = Joi.object({
  duracion: Joi.number().integer().required(),
  caloriasQuemadas: Joi.number().required(),
  fecha: Joi.date().iso().required(),
  estado: Joi.string().allow(null),
  progreso: Joi.number().allow(null),
});

export default actividadSchema;