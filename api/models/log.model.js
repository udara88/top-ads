import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
    email:{
        type:String
    },
    context:{
        type:String
    },
    message:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required:true
    },
   
    timestamp:
     {
     type:Date, 
     required:true,
     default:Date.now,
     expires:604800
    }
})

const Log = mongoose.model("Log",LogSchema);
export default Log;