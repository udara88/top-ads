import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
   
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      
    },

    firstname:{
      type:String,
      
    },
    lastname:{
      type:String
    },
    mobilenumber:{
      type:String
    },

    imageUrl:{
      type:String
    },

    isAuthenticated:{
      type:Boolean
    }
     

  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema);
export default User;
