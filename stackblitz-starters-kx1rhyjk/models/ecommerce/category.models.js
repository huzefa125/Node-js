import mongoose from "mongoose";

const categorySehema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
    },
},{timestamps:true})

export const Category = mongoose.model("Category",categorySehema)