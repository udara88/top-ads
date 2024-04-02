import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv' 
import userRoutes from './api/routes/user.route.js'
dotenv.config();

const app = express()

const MONGO_URI = process.env.MONGO_DB_URL

mongoose.connect(MONGO_URI).then(()=>{
    console.log('Mongodb is connected')
})
.catch((err)=>{
    console.log(err)

})
app.listen(3001,()=>{
    console.log('Server is runing on port 3001')
})

app.use('/api/user',userRoutes)