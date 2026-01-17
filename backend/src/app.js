// import express from "express";
// const app = express();
// app.use(express.json())
// import cookieParser from "cookie-parser";
// app.use(cookieParser());
// import cors from "cors";
// app.set("trust proxy", 1);
// app.use(cors({
//     origin:"https://myproject-ashy-sigma.vercel.app",
//     credentials:true
// }))

// import authRoutes from "./routes/auth.routes.js";
// import router from "./routes/food.routes.js";
// import foodpartner from './routes/food-partner.routes.js'
// app.use("/api/auth",authRoutes)
// app.use("/api/food",router)
// app.use("/api/partner",foodpartner)

// export default app

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.set("trust proxy", 1);

app.use(cors({
  origin: "https://myproject-ashy-sigma.vercel.app",
  credentials: true,
  methods: ["GET","POST","PUT","DELETE"],
  allowedHeaders: ["Content-Type","Authorization"]
}));

app.use(express.json());
app.use(cookieParser());
