import express from "express";
import { register } from "../controller/useController.js";
// import { regiter } from "../controler/userController.js";

const userRoute = express.Router();

// GET


// POST

userRoute.post("/register",register)


// PUT


// DELETE





export default userRoute