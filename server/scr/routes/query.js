
import express from "express"
import QueryController from "../controller/queryController";
import Auth from '../middlewares/auths'
const router = express.Router()
router.get("/",Auth.checkAuth,QueryController.queryGetName)
 router.post("/", QueryController.queryPostName)
export default router