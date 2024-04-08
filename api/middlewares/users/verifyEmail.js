import nodemailer from 'nodemailer'
import EmailVerification from '../../models/email.model.js'
import {query,validationResult} from  'express-validator'
import {verifyEmailHTML} from '../../utils/emailTemplates.js'
import { errorHandler } from '../../utils/error.js';

const CLIENT_URL = process.env.CLIENT_URL;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE;
const FROM = process.env.EMAIL
const PASSWORD = process.env.PASSWORD

const sendVerficationEmail = async(req,res) =>{
    const USER = process.env.EMAIL;
    const PASS = process.env.PASSWORD;
    const {email,username} = req.body;
    const verficationCode = Math.floor(10000 + Math.random() * 90000)
    const verficatonLink = `${CLIENT_URL}/auth/verify?code=${verficationCode}&email=${email}`

    try {
        let transporter = nodemailer.createTransport({
            host:EMAIL_SERVICE,
            port:465,
            secure:true,
            auth:{
                user:FROM,
                pass:PASSWORD
            }
        });
        let info = await transporter.sendMail({
            from:FROM,
            to:email,
            subject:"Verify your email address",
            html:verifyEmailHTML(username,verficatonLink,verficationCode)
        })

        const newVerification = new EmailVerification({
            email,
            verficationCode,
            messageId:info.messageId,
            for:"signup"
        });
        await newVerification.save();
        res.json(200).json({
            message:`Verification email was successfully sent to ${email}`,
        });

    } catch (error) {
        
        res.status(500).json(errorHandler(500, error.response.message))
    }
}


