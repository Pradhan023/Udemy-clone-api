const mongoose = require("mongoose")

const allDataSchema = mongoose.Schema({
    id:{
        type:Number
    },
    img:{
        type:String
    },
    heading:{
        type:String
    },        
    author:{
        type:String
    },
    des:{
        type:String
    },
    rating:{
        type:String
    },
    price:{
        type:Number
    },
    category:{
        type:String
    },
    subcat:{
        type:String
    },
    searchval:{
        type:String
    }
})

const allregDataSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String
    }
}) 

const addTocartSchema = mongoose.Schema({
    id:{
        type:Number
    },
    proID:{
        type:String
    },
    img:{
        type:String
    },
    heading:{
        type:String
    },
    des:{
        type:String
    }, 
    author:{
        type:String
    },
    rating:{
        type:String
    },
    price:{
        type:Number
    }
})

const learnignScehema = mongoose.Schema({
    id:{
        type:Number
    },
    img:{
        type:String
    },
    heading:{
        type:String
    },
    des:{
        type:String
    }, 
    author:{
        type:String
    },
    rating:{
        type:String
    },
    price:{
        type:Number
    }
})

const AlldataCollection = mongoose.model("AllData",allDataSchema)
const AllregistrationCollection = mongoose.model("RegsData",allregDataSchema)
const AlladdTocartCollection = mongoose.model("Addtocart",addTocartSchema)
const AllmylearningCollection = mongoose.model("Mylearning",learnignScehema)

module.exports = {AlldataCollection,AllregistrationCollection,AlladdTocartCollection,AllmylearningCollection}