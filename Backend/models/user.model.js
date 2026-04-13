import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    profileImageUrl: {
        type: String,
        required: true,
        default: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?_=20200919003010",
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },    
}, 
{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User