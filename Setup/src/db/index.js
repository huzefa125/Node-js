import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constansts.js";

const connectDB = async () => {
    // try {
    //     const connectionImstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    //     console.log(`\n Mongo COnneced !! ${connectionImstance.connection.host}`);
        
    // } catch (error) {
    //     console.log("MONGO connection error",error);
    //     process.exit(1)
    // }
    try {
        const connectionImstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n Mongo Connected !! ${connectionImstance.connection.host}`);
        
    } catch (error) {
        console.log(error);
        process.exit(1)
        
    }
}
export default connectDB