import User from '../models/user.model.js';
import Preference from '../models/preference.model.js';
import { json } from 'express';
import EmailVerification from '../models/email.model.js'
import { errorHandler } from '../utils/error.js';
export const verifyEmail = async (req,res,next)=>{
    const {code,email} = req.query;

    try {

        const [userObj,emailObj] = await Promise.all(
            [
                User.findOne({email :{$eq:email}}),
                EmailVerification.findOne({
                    email:{$eq:email},
                    verificationCode:{$eq:code}
    
                }),
            ]);
    

           
            if(userObj.isAuthenticated){
                return res.status(400).json(errorHandler(400,"Email is already verified"));
            }

            
    
            if(!emailObj){
                return res.status(400).json(errorHandler(400,'Verification code is invalid or has expired'));
            }
    
            const updatedUser = await User.findOneAndUpdate(
                {email:{$eq:email}},
                {isAuthenticated:true},
                {new:true}
    
            ).exec()
           
            await Promise.all([
                EmailVerification.deleteMany({email:{$eq:email}}).exec(),
    
                new Preference({
                    user:updatedUser,
                    enableContextBaedAuth:true
                }).save()
            ]);
           
            res.status(200).json("Email is verfied Please sign in")
    } catch (error) {
        console.log(error) 
    }
    
}