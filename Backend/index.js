const express=require("express");
const mongoose=require("mongoose");
var cors = require('cors')
require('dotenv').config()
const {authRouter}=require("./routes/Authentication")


const app=express();
app.use(express.json());
app.use(cors())

app.use("/auth",authRouter)



app.listen(8080,async()=>{
    try{
        const connection= await mongoose.connect(process.env.mongoUrl)
        console.log("Connected to db")
    }catch(err){
        console.log("Not Connected to db")
    }
    console.log("server is running at port 8080")
})