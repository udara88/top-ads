import nodemailer from 'nodemailer'
import EmailVerification from '../../models/email.model.js'
import {query,validationResult} from  'express-validator'
import {verifyEmailHTML} from '../../utils/emailTemplates.js'
import { errorHandler } from '../../utils/error.js';
import path from 'path'



const CLIENT_URL = process.env.CLIENT_URL;

export const sendVerficationEmail = async(req,res) =>{
  
    const __dirname = path.resolve();
    const imagePath = path.join(__dirname, '/api//assets/Images/logo.png'); 
    const USER = process.env.EMAIL;
    const PASS = process.env.PASSWORD;
    const HOST = process.env.HOST;
    const {email,username} = req.body;
    const verificationCode = Math.floor(10000 + Math.random() * 90000);
    const verficatonLink = `${CLIENT_URL}/auth/verify?code=${verificationCode}&email=${email}`;
    const attachments = [
        {
          filename: 'logo.png',
          path: imagePath,
          cid: 'logo' 
        }
      ];

    try {
        let transporter = nodemailer.createTransport({
            host: HOST,
            port:465,
            secure:true,
            auth: {
                user:USER,
                pass:PASS,
              },
        });
        let info = await transporter.sendMail({
            
            from:USER,
            to: email,
            subject:"Verify your email address",
            html:verifyEmailHTML(username,verficatonLink,verificationCode),
            attachments: attachments
        })

        const newVerification = new EmailVerification({
            email,
            verificationCode,
            messageId:info.messageId,
            for:"signup"
        });
        await newVerification.save();
        res.status(200).json({
            message:`Verification email was successfully sent to ${email}`,
        });

    } catch (error) {
        console.log(error)
        res.status(500).json(errorHandler(500, error))
    }
}


