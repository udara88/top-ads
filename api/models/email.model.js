import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const emailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    verificationCode:{
        type:String,
        rquired:true,
        unique:true,
    },

    messageId:{
        type:String,
        required:true,
    },
    for:{
        type:String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 120000, // 30 minutes
      },
})



const EmailVerification =  mongoose.model("Email",emailSchema)
export default EmailVerification;