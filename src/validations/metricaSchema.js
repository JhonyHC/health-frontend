import Joi from "joi";

const metricaSchema = Joi.object({
  circunferenciaCintura: Joi.number().allow(null),
  presionArterial: Joi.string().allow(null),
  imc: Joi.number().allow(null),
  peso: Joi.number().allow(null),
  altura: Joi.number().allow(null),
  frecuenciaCardiaca: Joi.number().integer().allow(null),
  temperaturaCorporal: Joi.number().allow(null),
  glucosaEnSangre: Joi.number().allow(null),
  colesterolHDL: Joi.number().allow(null),
  colesterolLDL: Joi.number().allow(null),
  frecuenciaRespiratoria: Joi.number().integer().allow(null),
});

export default metricaSchema;