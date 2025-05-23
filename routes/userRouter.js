import expresss from "express"
const userRoute =expresss.Router();
userRoute.post("/register",(req,res)=>
{
    const {name}=req.body;
    res.status(200).json({data: `welcome ${name}`})

})
export default userRoute;