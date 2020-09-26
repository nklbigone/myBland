import express from "express"
import article from '../models/Article'
import articleController from '../controller/articleController'
const router = express.Router()


router.get('/', articleController.articleGetName)

router.post('/', articleController.articlePostName)


export default router;