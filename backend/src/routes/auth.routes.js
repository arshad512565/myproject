import express from "express";
const router = express.Router();
import auth from "../controllers/auth.controllers.js";
//user routes
router.post('/user/register',auth.register)
router.post("/user/login",auth.loginuser)
router.post("/user/logout",auth.logout)

// food partner routes
router.post("/food-partner/register",auth.registerFoodPartner)
router.post("/food-partner/login",auth.loginFoodPartner)
router.post("/food-partner/logout",auth.logoutpartner)

export default router