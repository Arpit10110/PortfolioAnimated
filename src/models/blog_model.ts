import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    blog:{
        type:String,
        required:true,
    }
},{timestamps:true});

export const BlogModel = mongoose.models.Blog || mongoose.model("Blog",Schema);