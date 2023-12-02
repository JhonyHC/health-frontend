import Joi from "joi";

const comidaSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow(null),
  calorias: Joi.number().integer().required(),
  proteinas: Joi.number().required(),
  carbohidratos: Joi.number().required(),
  grasas: Joi.number().required(),
  fibra: Joi.number().allow(null),
  imagen: Joi.string().allow(null),
});

export default comidaSchema;