const mongoose = require("mongoose");

// const DB = process.env.DATABASE;

const DB = "mongodb+srv://mee112114:Mrs%40112114115@cluster0.eeausst.mongodb.net/travel-app?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
    console.log("connection successful");
 }).catch((err)=>{
    console.log(err);
 });