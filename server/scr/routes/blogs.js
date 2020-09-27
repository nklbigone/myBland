import express from "express"
import blogController from '../controller/blogController'
const router = express.Router()
router.get('/', blogController.blogGetName )
router.get('/:id', blogController.blogGetOneName )
router.patch('/:id', blogController.updateBlog )
router.post('/', blogController.blogPostName )
router.delete('/:id', blogController.deleteBlog )
export default router;