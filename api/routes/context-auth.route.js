import express from 'express'
import {verifyEmailValidation} from '../middlewares/users/verifyEmail.js'
import {verifyEmail} from '../controllers/auth.controller.js'
const router = express.Router();

router.get('/verify',verifyEmailValidation,verifyEmail)


export default router;