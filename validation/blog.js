import Joi from "joi";

const blogSchema = Joi.object().keys({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    title: Joi.string().required(),
    coverImg: Joi.string().required(),
    content: Joi.string().required(),
})

export default blogSchema;