import Query from "../models/Query";
import queryValidation from "../validation/query.validation"
class QueryController {
    static async queryGetName(req , res){
        try{

            const queris = await Query.find()
            res.json(queris)
    
        }catch(err){
        res.send('error' +err)
        }
    }

    static async queryPostName(req, res){

        const {error} = queryValidation(req.body);
        if (error){
            res.json({
                success: 0,
                message: error.details[0].message
            })
        }

        const cont = new Query({
            name: req.body.name,
            email: req.body.email,
            content: req.body.content
        })
        try{
            const query1 = await cont.save()
            res.json(query1)
        }catch{
            res.send('Error')
        }
    }
}

export default QueryController
