import bcrypt  from 'bcryptjs'
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
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

