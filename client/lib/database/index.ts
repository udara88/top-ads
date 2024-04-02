import mongoose from "mongoose";
let cached = (global as any).mongoose || {conn:null,promise:null};

const MONGODB_URI = process.env.MONGO_DB_URL;

export const connectToDatabase = async ()=>{
     if(cached.conn) return cached.conn
     if(!MONGODB_URI) throw new Error('MONGODB uri is missing');

     cached.promise = cached.promise || mongoose.connect(MONGODB_URI,{
        dbName:'topads',
        bufferCommands:false

     })
     cached.conn = await cached.promise;


}
