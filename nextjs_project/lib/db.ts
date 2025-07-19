import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;
if(!MONGODB_URL){
    throw new Error('Please define mongodb url in env file ');
}

let cached = global.mongoose;

if(!cached){
    cached=global.mongoose ={conn:null,promise:null};

}

export async function connectToDatabase(){
    if(cached.conn){
        return cached.conn;
    }
    if(!cached.promise){
        const opts={
            bufferCommands :true,
            maxPoolSize:10 // max how many connection to mongo db
        }
    
    cached.promise=mongoose.connect(MONGODB_URL,opts);
    }
    try{
        cached.conn=await cached.promise
    }
    catch(error){
cached.promise=null ; 
throw error 
    }
    return cached.conn
}