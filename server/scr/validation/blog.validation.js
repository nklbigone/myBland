import joi from 'joi'

const blogValidation =  (body) => {
    const blogSchema = joi.object({
        title: joi.string().required().min(3).max(200),
        blogDescription: joi.string().required().min(3).max(200),
        // blogPicture: joi.string().required().min(13).max(200)
    })
    return blogSchema.validate(body)
}
export default blogValidation