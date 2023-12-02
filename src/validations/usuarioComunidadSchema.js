import Joi from "joi";

const usuarioComunidadSchema = Joi.object({
  isActive: Joi.boolean().required(),
  fechaIngreso: Joi.date().iso().required(),
});

export default usuarioComunidadSchema;