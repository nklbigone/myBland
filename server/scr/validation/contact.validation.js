import joi from 'joi'

const contactValidation =  (body) => {
    const contactSchema = joi.object({
        title: joi.string().required().min(3).max(20),
        content: joi.string().required().min(10),
    })
    return contactSchema.validate(body)
}
export default contactValidation