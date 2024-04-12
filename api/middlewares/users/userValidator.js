import {check,validationResult} from 'express-validator'
import User from '../../models/user.model.js';
import { errorHandler } from "../../utils/error.js";


export const addUserValidator = [
    check("firstname").isLength({min:3})
    .withMessage("firstname should required")
    .isAlpha("en-US",{ignore:"-"})
    .withMessage("Name must not contain anything other than alphabet")
    .custom((value,{req})=>{
          
        switch(true){
            case value.length === 1:
                throw new Error('firstname must be at least 2 characters long');

            case value.length> 20:
                throw new Error('firstname cannot be more than 20  characters long');
                default:
                    return true;
        }
    }).trim(),
    check("lastname").isLength({min:3})
    .withMessage("lastname should required")
    .isAlpha("en-US",{ignore:"-"})
    .withMessage("Name must not contain anything other than alphabet")
    .custom((value,{req})=>{
          
        switch(true){
            case value.length === 1:
                throw new Error('lastname must be at least 2 characters long');

            case value.length> 20:
                throw new Error('firstname cannot be more than 20  characters long'); 
                default:
                    return true;
        }
    }).trim(),
    check('mobilenumber').isMobilePhone('any')
    .withMessage('Invalid mobile number'),
    check("email")
    .isEmail()
    .withMessage('Invalid email address')
    .trim()
    .custom(async (value)=>{
        try {

            const user = await User.findOne({email:value})
            if(user)throw new Error('There is already an account associated with this email address');
            
        } catch (error) {
            throw error;
        }
    }),
    check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
];

export const addUserValidatorHandler = (req,res,next)=>{
    const errors = validationResult(req);
    const mappedErrors = errors.mapped()
    if(Object.keys(mappedErrors).length === 0){
        next();
    }else{
        const errorMessage = Object.values(mappedErrors).map((error)=> error.msg)
        res
        .status(400)
        .json(errorHandler(400,errorMessage.toString()))

    }
}



