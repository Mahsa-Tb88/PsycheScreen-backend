import "dotenv/config";
import "./utils/globalConstants.js";

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import responseMiddleware from "./middlewares/responseMiddleware.js";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"
import errorHandler from "./middlewares/errorHandlers.js";


const app= express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials:true,origin:true}))
app.use(responseMiddleware)


app.use(errorHandler);


app.use("/api/auth", authRoutes);

try{
    await mongoose.connect(MONGO_URI);
    console.log("connected to database successfyllu!")
}catch(e:any){
    console.log(e.message);
    process.exit()
}


app.listen(PORT,()=>{
    console.log("server is runing on http://localhost:"+PORT)
})
