import express from 'express';
import authmiddleware from '../middlewares/auth.middleware.js';
import foodController from '../controllers/food.controllers.js';
import multer from 'multer';
const upload = multer({
    storage:multer.memoryStorage(),
})
const router = express.Router();
router.post('/',authmiddleware.authfoodPartnerMiddleware,upload.single('video'),foodController.createfood);
router.get('/get',authmiddleware.authUsermiddleware,foodController.getfooditem);
//router.get('/:id',authmiddleware.authUsermiddleware,foodController.getFoodPartnerById)
export default router

//696bc50f4368003ec2d0fb82 partnerId