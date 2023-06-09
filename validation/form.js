import Joi from "joi";

const formSchema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.number().required().min(10),
    address: Joi.string().required(),
    message: Joi.string().required()
})

export default formSchema;