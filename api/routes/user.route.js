import express from 'express'
import {addUserValidator,addUserValidatorHandler} from '../middlewares/users/userValidator.js'
import {sendVerficationEmail} from '../middlewares/users/verifyEmail.js'
import  {addUser, signin,getUser} from '../controllers/user.controller.js'
import  useragent  from 'express-useragent'
import  requestIp  from 'request-ip'
import {verifyToken} from  '../middlewares/auth/verifyToken.js'
import passport from 'passport'


const router = express.Router();
//const requireAuth = passport.authenticate('jwt', {session: false},null)



router.post("/signup",
             addUserValidator,
             addUserValidatorHandler,
             addUser,
             sendVerficationEmail
             );
router.post(
    "/signin",
    requestIp.mw(),
    useragent.express(),
    signin
    );

    router.get("/getuser",verifyToken,getUser)




export default router;
