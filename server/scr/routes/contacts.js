import express from "express"
import contact from '../models/Contact'
import contactController from '../controller/contactController'
const router = express.Router()
router.get('/', contactController.contactGetName)

router.post('/', contactController.contactPostName)

export default router;