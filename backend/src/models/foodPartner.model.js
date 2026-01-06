import mongoose from "mongoose";
const foodpartnerModel =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contactName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})
const foodpartner = mongoose.model("partner",foodpartnerModel);
export default foodpartner