import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try{ 
        const connected = await mongoose.connect(process.env.CONNECTION_URI!);
        if(connected) console.log("Database connected");

    } catch (e) {
        console.log(e)
    }

}

export default connectDB;