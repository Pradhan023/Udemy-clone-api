const mongo = require("mongoose")


const Connection = async()=>{
    try{
        await mongo.connect(process.env.MongoUrl)
        console.log("Mongo DB Connect");
    }
    catch(err){
        console.log("DB error" , err);
    }
}

module.exports = Connection