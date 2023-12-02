import Joi from "joi";

const crearUsuarioSchema = Joi.object({
	username: Joi.string()
		.min(5)
		.max(50)
		.pattern(/^(?=.{5,50}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
		.required(),
	email: Joi.string().max(100).email().required(),
	password: Joi.string().min(8).max(50).required(),
});

const iniciarSesionSchema = Joi.object({
	username: Joi.string().min(5).max(50).required(),
	password: Joi.string().min(8).max(50).required(),
});

export { crearUsuarioSchema, iniciarSesionSchema };