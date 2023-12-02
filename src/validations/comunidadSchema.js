import Joi from "joi";

const comunidadSchema = Joi.object({
  nombreGrupo: Joi.string().required(),
  descripcion: Joi.string().allow(null),
  fechaCreacion: Joi.date().iso().required(),
  numeroMiembros: Joi.number().integer().required(),
  isActive: Joi.boolean().required(),
  imagen: Joi.string().allow(null),
});

export default comunidadSchema;