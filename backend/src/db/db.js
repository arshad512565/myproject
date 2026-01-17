// import mongoose from "mongoose";
// function dbconnecter(){
//     mongoose.connect(process.env.MONGODB_URI).then(()=>{
//         console.log("Mongodb connected successfully")
//     })
// }
// export default dbconnecter

import mongoose from "mongoose";

const dbconnecter = async () => {
  console.log("sata",process.env.MONGODB_URI)
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("❌ MONGODB_URI is missing!");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
  console.log("sata 2222",process.env.MONGODB_URI)
};

export default dbconnecter;

