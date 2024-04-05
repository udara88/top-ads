import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
     next(errorHandler(400,'All fields are required'))
  }
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      firstname:'',
      lastname:'',
      mobile:'',
      imageUrl:''
    });

    await newUser.save();
    res.json({status:true,message:'Created successfully',user:newUser});
  } catch (error) {
    next(error)
  }
};
