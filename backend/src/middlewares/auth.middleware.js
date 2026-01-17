//import foodpartner from "../models/foodPartner.model";
import foodpartnermodel from "../models/foodPartner.model.js";
import usermodel from "../models/user.model.js";
import jwt from 'jsonwebtoken';

async function authfoodPartnerMiddleware(req,res,next){
    const token = req.cookies.token;
    if(!token){
       return res.status(401).json({
            message:"Please login first"
        })
    }
    try {
     const decoded = jwt.verify(token,process.env.SECRETKEY)
     const foodpartner = await foodpartnermodel.findById(decoded.id)
     req.foodpartner = foodpartner;
     next();
    } catch (error) {
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}
async function authUsermiddleware(req,res,next){
    const token = req.cookies.token;
    console.log("your token",token)
    if(!token){
        return res.status(400).json({
            message:"Please login user first"
        })
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRETKEY)
        const user = await usermodel.findById(decoded._id)
        req.user = user
        next()
    } catch (error) {
        console.log(error)
    }
}
export default {
    authfoodPartnerMiddleware,
    authUsermiddleware
}