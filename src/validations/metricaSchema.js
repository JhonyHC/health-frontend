import Joi from "joi";

const metricaSchema = Joi.object({
  circunferenciaCintura: Joi.number().allow(null).allow(''),
  presionArterial: Joi.string().allow(null).allow(''),
  imc: Joi.number().allow(null).allow(''),
  peso: Joi.number().allow(null).allow(''),
  altura: Joi.number().allow(null).allow(''),
  frecuenciaCardiaca: Joi.number().integer().allow(null).allow(''),
  temperaturaCorporal: Joi.number().allow(null).allow(''),
  glucosaEnSangre: Joi.number().allow(null).allow(''),
  colesterolHDL: Joi.number().allow(null).allow(''),
  colesterolLDL: Joi.number().allow(null).allow(''),
  frecuenciaRespiratoria: Joi.number().integer().allow(null).allow(''),
});

export default metricaSchema;