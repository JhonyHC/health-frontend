import Joi from "joi";

const historialSchema = Joi.object({
  alergias: Joi.string().allow("").optional(),
  enfermedadesCronicas: Joi.string().allow("").optional(),
  cirugiasAnteriores: Joi.string().allow("").optional(),
  medicamentosTomados: Joi.string().allow("").optional(),
});

export default historialSchema;