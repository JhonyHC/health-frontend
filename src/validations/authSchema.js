import Joi from "joi";

const loginSchema = Joi.object({
	email: Joi.string().email({tlds: {allow: false}}).min(5).max(200).required(),
	password: Joi.string().min(5).max(200).required(),
});

export default loginSchema;