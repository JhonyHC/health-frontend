import Joi from "joi";

const comunidadSchema = Joi.object({
  nombreGrupo: Joi.string().required(),
  descripcion: Joi.string().allow(null).allow(''),
  fechaCreacion: Joi.date().iso().required(),
  // numeroMiembros: Joi.number().integer().required(),
  isActive: Joi.boolean().required(),
  imagen: Joi.string().allow(null).allow(''),
});

export default comunidadSchema;