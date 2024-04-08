import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstname:{
      type:String,
      
    },
    lastname:{
      type:String
    },
    mobile:{
      type:String
    },

    imageUrl:{
      type:String
    },

    isAuthenticated:{
      type:String
    }
     

  },
  { timestamps: true }
);

const User = mongoose.model('User',userSchema);
export default User;
