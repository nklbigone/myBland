import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    picture: {
        type: String
    }
})

module.exports = mongoose.model('article', contactSchema)