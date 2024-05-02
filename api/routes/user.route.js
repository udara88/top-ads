import express from 'express'
import {addUserValidator,addUserValidatorHandler} from '../middlewares/users/userValidator.js'
import {sendVerficationEmail} from '../middlewares/users/verifyEmail.js'
import  {addUser, signin,getUser} from '../controllers/user.controller.js'
import  useragent  from 'express-useragent'
import  requestIp  from 'request-ip'



const router = express.Router();

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

    router.get("/getuser",getUser)




export default router;
