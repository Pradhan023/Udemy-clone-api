require("dotenv").config()
const express = require("express")
const app = express();

const cors = require("cors")

const Connection = require("./Config/config")

app.use(cors())

app.use(express.json())

const route = require("./RoutesComp/routeComp")

const Port = process.env.Port || 3000;



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