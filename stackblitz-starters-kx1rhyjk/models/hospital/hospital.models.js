import mongoose from "mongoose";

const hospitalRecordSchema = new mongoose.Schema({

},{timestamps:true})

export const HospitalRecord = mongoose.model("HospitalRecord",hospitalRecordSchema)