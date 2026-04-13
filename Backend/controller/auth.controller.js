import User from "../models/user.model.js";
import bcryptjs from "bcrypt";

export const signup = async (req, res) => {
    const { name, email, password, profileImageUrl,adminJoincode } = req.body;

    if (!name || !email || !password || name==="" || email==="" || password==="") {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists

    const isAlreadyExist = await User.findOne({ email });

    if (isAlreadyExist) {
        return res.status(400).json({message: "User already exists" });
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
    res.status(500).json({message: error.message()});
 }
}