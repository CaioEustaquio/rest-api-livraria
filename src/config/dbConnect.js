import mongoose, { mongo } from "mongoose";
import config from "./config.js";

async function connectDb(){

    mongoose.connect(config.dbConnectionString);

    return mongoose.connection;
}

export default connectDb;