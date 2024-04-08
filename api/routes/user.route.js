import express from 'express'
import {addUserValidator,addUserValidatorHandler} from '../middlewares/users/userValidator.js'
import {sendVerficationEmail} from '../middlewares/users/verifyEmail.js'
import  {addUser} from '../controllers/user.controller.js'

const router = express.Router();

router.post("/signup",addUserValidator,addUserValidatorHandler,addUser,sendVerficationEmail);


export default router;
