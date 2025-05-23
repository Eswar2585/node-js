import User from "../model/userModel.js";

<<<<<<< HEAD

export const register = async (req,res) => {
    const {name ,email,phoneNumber,password} = req.body;
    try {
        const user = await User.create({
            name ,email,phoneNumber,password
        })

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
}
=======
export const register=async(req,res)=>{
    const {name}=req.body;
    res.status(200).json({data: `welcome ${name}`})
}
>>>>>>> fdb7c14bb715fe61066a0bca96cd19a4cc13bb4f
