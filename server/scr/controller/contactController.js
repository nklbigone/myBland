import contact from '../models/Contact'
import contactValidation from "../validation/contact.validation";

class contactsController{
    static async contactGetName(req , res){
        try{

            const contacts = await contact.find()
            res.json(contacts)
    
        }catch(err){
        res.send('error' +err)
        }
    }
    static async contactPostName(req, res){

        const {error} = contactValidation(req.body);
        if (error){
            res.json({
                success: 0,
                message: error.details[0].message
            })
        }
        const cont = new contact({
            title: req.body.title,
            message: req.body.message
        })
        try{
            const contact1 = await cont.save()
            res.json(contact1)
        }catch{
            res.send('Error')
        }
    }
}

export default contactsController