import { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
    userId:{type:String, unique:true},
    email:{type:String,required:true,unique:true},
    
})