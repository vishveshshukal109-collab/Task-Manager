import User from "../models/user.model.js";
import bcryptjs from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { name, email, password, profileImageUrl,adminJoincode } = req.body;

    if (!name || !email || !password || name==="" || email==="" || password==="") {
        return next(errorHandler(400, "All fields are required"));
    }

    // Check if the user already exists

    const isAlreadyExist = await User.findOne({ email });

    if (isAlreadyExist) {
        return next(errorHandler(400, "User already exists")) ;
    }

    // check user role
     let role = 'user'
     
     if (adminJoincode && adminJoincode === process.env.ADMIN_JOIN_CODE) {
         role = 'admin'
     }

     const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        profileImageUrl,
        role
    });

try {

    await newUser.save();

    res.json("Signup successfully" );
} catch (error) {
    next(error);
 }
}