import mongoose from "mongoose";

const patientRecordSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    diagonseWith:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        require:true,
    },
    bloodGroup:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        enum:["M","F","0"],
        require:true,
    },
    addmittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"HospitalRecord",
        require:true,
    },
},{timestamps:true})

export const PatientRecord = mongoose.model("PatientRecord",patientRecordSchema)