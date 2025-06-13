import mongoose from "mongoose";

export const connectDb = async () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "XCONNECTXPRESS",
    } ).then(()=>{
        console.log("Connected to MongoDB")
    }).catch( (err) => {
        console.log('there is an error running the database', err)
    });
}