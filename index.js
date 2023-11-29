require("dotenv").config()
const express = require("express")
const app = express();

const Connection = require("./Config/config")

const route = require("./RoutesComp/routeComp")

const Port = process.env.Port || 3000;

app.use(express.json())

app.use("/api",route)

app.listen(Port,async()=>{
    try{
        await Connection()
        console.log("Server is live on Port" ,Port);
    }
    catch(err){
        console.log("Server error" ,err);
    }
})