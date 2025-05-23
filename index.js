import express from "express"
import dotenv from "dotenv"
dotenv.config()

import cors from "cors"
import connectDB from "./connectDB.js"
import userRoute from "./routes/userRouter.js"

const app =express()
app.use(express.json())
app.use(cors())
app.use("/api/user",userRoute)
app.get("/",(req,res)=>
{
    res.status(200).json({Message:"Api successfully run "})
})
app.get("/api/hear-beat",(req,res) =>
{
   res.status(200).json({data:"Heart beat is successfully run"})
})
app.listen(process.env.PORT,()=>
{
    console.log(`Server running Successfully at port`)
})

connectDB();
