import joi from 'joi'

const queryValidation =  (body) => {
    const querySchema = joi.object({
        name: joi.string().required().min(3).max(20),
        email: joi.string().pattern(new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")).required(),
        content: joi.string().required().min(10).max(200),
    })
    return querySchema.validate(body)
}
export default queryValidation