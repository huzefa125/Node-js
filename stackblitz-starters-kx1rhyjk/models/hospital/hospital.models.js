import mongoose from "mongoose";

const hospitalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    specializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const HospitalRecord = mongoose.model(
  "HospitalRecord",
  hospitalRecordSchema
);
