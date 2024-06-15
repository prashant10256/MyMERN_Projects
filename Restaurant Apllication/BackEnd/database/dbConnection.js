import mongoose from "mongoose";
 export const dbConnection  = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURENT"
    })
    .then(()=>{
        console.log("Connected to database Successfully...");
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to database! ${err}`);
    });
 }