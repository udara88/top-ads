import bcrypt  from 'bcryptjs'
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import { saveLogInfo } from '../middlewares/users/logger/logInfo.js';


const LOG_TYPE = {
    SIGN_IN: "sign in",
    LOGOUT: "logout",
  };

  const LEVEL = {
    INFO:"info",
    ERROR:"error",
    WARN:"warn"
  }

  const MESSAGE = {
    SIGN_IN_ATTEMPT: "User attempting to sign in",
    SIGN_IN_ERROR: "Error occurred while signing in user: ",
    INCORRECT_EMAIL: "Incorrect email",
    INCORRECT_PASSWORD: "Incorrect password",
    DEVICE_BLOCKED: "Sign in attempt from blocked device",
    CONTEXT_DATA_VERIFY_ERROR: "Context data verification failed",
    MULTIPLE_ATTEMPT_WITHOUT_VERIFY:
      "Multiple sign in attempts detected without verifying identity.",
    LOGOUT_SUCCESS: "User has logged out successfully",
  };

  export const signin = async(req,res,next)=>{
    await saveLogInfo(req,"user attempting to sign in",LOG_TYPE.SIGN_IN,LEVEL.INFO);

    try {

      const {email,password} = req.body;
      const existingUser = await User.findOne({email:email});
      if(!existingUser){
        await saveLogInfo(req,MESSAGE.INCORRECT_EMAIL,LOG_TYPE.SIGN_IN,LEVEL.ERROR)

        return res.status(404).json(errorHandler(404,"Invalid credentials "))

      }

      const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
      if(!isPasswordCorrect){
        await saveLogInfo(req,
                          MESSAGE.INCORRECT_PASSWORD,
                          LOG_TYPE.SIGN_IN,
                          LEVEL.ERROR)

           res.status(400).json(errorHandler(400,'Invalid credentials'))
      }

    } catch (error) {
      
    }


  }


export const addUser = async(req,res,next) =>{
    const { username, email, password } = req.body;
    
    let newUser;
    const hashedPassword = await bcrypt.hash(password,10)
    const defaultAvatar = "https://raw.githubusercontent.com/nz-m/public-files/main/dp.jpg"
  
    newUser = new User({
        username,
        email,
        password,
        imageUrl:defaultAvatar,
        isAuthenticated:false
    })
   
    try {
        await newUser.save();
        next();
        
    } catch (error) {
        res.status(400).json(errorHandler(400,'Failed to add user'))
    }

    
}

