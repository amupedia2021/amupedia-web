import Joi from "joi";

const userSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

export default userSchema;