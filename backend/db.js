import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// connect to mongoose, details are written in .env file
const connectToMongo = ()=>{
    mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`connected to ${process.env.MONGODB_URI}`);
    })
    .catch((err) => {
        console.log(err.message);
    });
}

export default connectToMongo