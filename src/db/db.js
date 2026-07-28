import mongoose from "mongoose";
import dns from "dns";
dns.setServers(['8.8.8.8', '1.1.1.1']);
export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI,{dbName:"Blog_Generator"})
    .then(()=>{
        console.log("Connected to MongoDB Successfully");
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB", err);
    });
}