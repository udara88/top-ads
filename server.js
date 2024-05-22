import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv' 
import userRoutes from './api/routes/user.route.js'
import contextAuthRoutes from './api/routes/context-auth.route.js'
import refreshRoute  from './api/routes/refresh.route.js'
import logoutRoute  from './api/routes/logout.route.js'
import cors from 'cors'
import passport from 'passport'
import './api/config/passport.js'
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(passport.initialize());


const MONGO_URI = process.env.MONGO_DB_URL;


mongoose.connect(MONGO_URI).then(()=>{
    console.log('Mongodb is connected');
})
.catch((err)=>{
    console.log(err);

})
app.listen(3001,()=>{
    console.log('Server is runing on port 3001');
})
app.use(cors());
app.use('/users',userRoutes);
app.use('/auth',contextAuthRoutes);
app.use('/refresh',refreshRoute);
app.use('/logout',logoutRoute);
