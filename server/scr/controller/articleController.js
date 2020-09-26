import article from '../models/Article'
import articleValidation from "../validation/artical.validation";
 class articleControllers{
   static async articleGetName(req , res){

        try{

            const articles = await article.find()
            res.json(articles)

        }catch(err){
        res.send('error' +err)
        }
    }
  static  async articlePostName(req, res){
    const {error} = articleValidation(req.body);
    if (error){
        res.json({
            success: 0,
            message: error.details[0].message
        })
    }
        const art = new article({
            title: req.body.title,
            description: req.body.description,
            picture: req.body.picture
        })
        try{
            const article1 = await art.save()
            res.json(article1)
        }catch{
            res.send('Error')
        }
    }

 }
export default articleControllers