import express from "express";
const app = express();
app.use(express.json())
import cookieParser from "cookie-parser";
import cors from "cors";
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser());
import authRoutes from "./routes/auth.routes.js";
import router from "./routes/food.routes.js";
import foodpartner from './routes/food-partner.routes.js'
app.use("/api/auth",authRoutes)
app.use("/api/food",router)
app.use("/api/partner",foodpartner)

export default app