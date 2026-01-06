import dotenv from "dotenv"
dotenv.config()
import app from "./src/app.js";
import dbconnecter from "./src/db/db.js";

dbconnecter();
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(4500,()=>{
    console.log("Server start")
})
