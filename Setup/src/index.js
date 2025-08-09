
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });


import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./constansts.js"; 

connectDB();


// import express from "express"
// const app = express()

// ;( async () => {
//     try {
//         mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//         app.on("error",() => {
//             console.log(error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.log(error);
        
//     }
// })  ()