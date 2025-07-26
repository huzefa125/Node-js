import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description : {
        require:true,
        type:String,
    },
    name : {
        type:String,
        require:true,
    },
    productImage:{
        type:String,
    },
    price : {
        type:Number,
        default:0,
    },
    stock : {
        default:0,
        type:Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)