import foodmodel from "../models/fooditems.models.js";
import foodpartner from "../models/foodPartner.model.js";
import dotenv from "dotenv"
dotenv.config();
import storageService from "../services/storage.service.js";
import { v4 as uuid} from "uuid";
//import foodpartner from "../models/foodPartner.model.js";
async function createfood (req,res){
    const fileuploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    const fooditem = await foodmodel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileuploadResult.url,
        foodPartner:req.foodpartner._id,
    })
   res.status(201).json({
    message:"Food added successfully",
    food:fooditem
   })
}
async function getfooditem (req,res){
    const fooditems = await foodmodel.find({})
    res.status(200).json({
        message:"Food items fetched successfully",
        fooditems
    })
}
export default {createfood,getfooditem}