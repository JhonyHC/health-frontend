import Joi from 'joi';

const dietaSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().allow(null).allow(''),
  tipoDieta: Joi.string().allow(null).allow(''),
  calorias: Joi.number().integer().required(),
  proteinas: Joi.number().required(),
  carbohidratos: Joi.number().required(),
  grasas: Joi.number().required(),
  fibra: Joi.number().allow(null).allow(''),
  imagen: Joi.string().allow(null).allow(''),
});

export default dietaSchema;
