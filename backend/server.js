// import dotenv from "dotenv"
// dotenv.config()
// import app from "./src/app.js";
// import dbconnecter from "./src/db/db.js";

// dbconnecter();




// import dotenv from "dotenv";
// dotenv.config();

import app from "./src/app.js";
import dbconnecter from "./src/db/db.js";

const PORT = 4500;

const startServer = async () => {
  try {
    await dbconnecter();   // ⬅️ WAIT for MongoDB
    app.listen(PORT, () => {
      console.log("✅ MongoDB connected");
      console.log(`🚀 Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
  }
};

startServer();
// app.listen(4500,()=>{
//     console.log("Server start")
// })
app.get("/",(req,res)=>{
    res.send("hello world")
})

