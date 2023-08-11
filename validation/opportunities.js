import Joi from "joi";

const opportunitiesSchema = Joi.object().keys({
    id: Joi.string().required(),
    image: Joi.string().required(),
    title: Joi.string().required(),
    date: Joi.string().required(),
    applyNow: Joi.string().required(),
    description: Joi.string().required(),
})

export default opportunitiesSchema;