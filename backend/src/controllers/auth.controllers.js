import usermodel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import foodpartnermodel from "../models/foodPartner.model.js";
const register = async(req,res)=>{
    const {fullName,email,password}=req.body;
    const userAlreadyExist =await usermodel.findOne({
        email
    })
    if(userAlreadyExist){
        return res.status(400).json({message:"user already exist"})
    } 
    const hashedpassword = await bcryptjs.hash(password,10)
    const user = await usermodel.create({
        fullName,
        email,
        password:hashedpassword
    })
   const token =  jwt.sign({
    id:user._id
   },process.env.SECRETKEY)

   res.cookie("token",token)

   res.status(201).json({
    message:"User created successfully",
    id:user._id,
    email:user.email,
    fullname:user.fullName
   })
}
const loginuser = async (req,res)=>{
    const {email,password}= req.body;
    const user = await usermodel.findOne({
        email
    })
    if(!user){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
    const passwordValid = await bcryptjs.compare(password,user.password)
      if(!passwordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
     const token = jwt.sign({id:user._id},process.env.SECRETKEY)
        res.cookie("token",token)
        res.status(201).json({
            user
        })
}
async function registerFoodPartner(req,res){
    const {name,email,password,contactName,address,phone}= req.body;
    const partnerAlreadyExist = await foodpartnermodel.findOne({
                email
    })
    if(partnerAlreadyExist){
        return res.status(200).json({
            message:"Food partner account already exist"
        })
    }
    const hashpassword = await bcryptjs.hash(password,10)
    const foodPartner = await foodpartnermodel.create({
        name,
        email,
        contactName,
        address,
        phone,
        password:hashpassword
    })
    const token = jwt.sign({
       id:foodPartner._id
    },process.env.SECRETKEY)
    res.cookie("token",token)
    res.status(200).json({
        message:"Food partner register successfully",
        id:foodPartner._id,
        email:foodPartner.email,
        name:foodPartner.name

    })
}
 async function loginFoodPartner(req,res){
    const {email,password}=  req.body;
    const partner = await foodpartnermodel.findOne({
        email
    })
    if(!partner){
        return res.status(200).json({
            message:"something went wrong"
        })
    }
  const passwordValid =  await bcryptjs.compare(password,partner.password)
   if(!passwordValid){
        return res.status(200).json({
            message:"something went wrong"
        })
    }
   const token = jwt.sign({id:partner._id},process.env.SECRETKEY)
  //  res.cookie("token",token)
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  maxAge: 7 * 24 * 60 * 60 * 1000
});

    res.status(200).json({
        message:"Account created successfully",
        id:partner._id,
        email:partner.email,
        name:partner.name
    })
 }
 function logoutpartner(req,res){
    res.clearCookie("token")
    res.status(200).json({
        message:"Food partner logout successfully"
    })
 }
const logout = (req,res)=>{
    res.cookie("token",'')
    res.clearCookie("token")
    res.json({
        message:"User logout successfully"
    })
    
}
export default {register,loginuser,logout,loginFoodPartner,registerFoodPartner,logoutpartner}