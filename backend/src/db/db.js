import mongoose from "mongoose";
function dbconnecter(){
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("Mongodb connected successfully")
//console.log('meda kia kasoor he')
    })
}
export default dbconnecter