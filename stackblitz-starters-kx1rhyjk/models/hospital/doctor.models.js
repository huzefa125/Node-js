import mongoose from "mongoose";

const doctorRecordSchema = new mongoose.Schema({
     name:{
        type:String,
        require:true,
    },
     salary:{
        type:String,
        require:true,
    },
     qualification:{
        type:String,
        require:true,
    },
    experiemceInYear:{
        type:Number,
        default:0,
    },
},{timestamps:true})

export const DoctorRecord = mongoose.model("DoctorRecord",doctorRecordSchema)