import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv' 
import userRoutes from './api/routes/user.route.js'
import authRoutes from './api/routes/auth.route.js'
dotenv.config();

const app = express();
app.use(express.json());
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
app.use('/api/user',userRoutes);
app.use('/api/auth', authRoutes);
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})