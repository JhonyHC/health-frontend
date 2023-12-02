import Joi from "joi";

const publicacionSchema = Joi.object({
  titulo: Joi.string().min(5).max(100).required(),
  contenido: Joi.string().min(5).max(2500).required(),
  likes: Joi.number().integer().required(),
  imagen: Joi.string().allow(null),
  isActive: Joi.boolean().required(),
  fechaCreacion: Joi.date().iso().required(),
});

export default publicacionSchema;