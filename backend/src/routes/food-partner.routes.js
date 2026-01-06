import express from 'express';
import authmiddleware from '../middlewares/auth.middleware.js';
//import foodController from '../controllers/food.controllers.js';
import foodpartner from '../controllers/food-partner.controllers.js'
const router = express.Router();
//router.get("/",console.log("baba je "))
router.get('/:id',authmiddleware.authUsermiddleware,foodpartner.getFoodPartnerById)
export default router