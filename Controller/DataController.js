const  Dummydata = require("../Data")

const {AlldataCollection,AlladdTocartCollection,AllmylearningCollection} = require("../Model/model")
    
const pushData = async(req,res)=>{
    const sdata =await AlldataCollection.create(Dummydata)
    res.send(sdata)
}
const getData = async(req,res)=>{
    const tdata = await AlldataCollection.find({})
    res.send(tdata)
}

const pushcartData = async(req,res)=>{
    const cartDetails = req.body;
    const cartdata = await AlladdTocartCollection.create(cartDetails)
    res.send(cartdata)
}

const getcartData = async(req,res)=>{
    const cartdata = await AlladdTocartCollection.find({});
    res.send(cartdata)
}

const deleteCart = async(req,res)=>{
    const deletecart = await AlladdTocartCollection.deleteMany({})
    res.send(deletecart)
}

const pushlearningdata = async(req,res)=>{
    const data = req.body;
    const learningdata = await AllmylearningCollection.create(data)
    res.send(learningdata)
}

const getlearning = async(req,res)=>{
    const data = await AllmylearningCollection.find({})
    res.send(data)
}


const searchdata = async (req,res)=>{
    const {searchval} = req.query
    console.log(searchval);

    const queryObj = {}

    
    if(searchval){
        queryObj.searchval = {$regex : searchval , $options : "i"};
    }

    if(!searchval)
    {
        return res.send("Invalid search")
    }
   
    // console.log(queryObj);
    const search = await AlldataCollection.find(queryObj)
    
    return res.send(search)
}

module.exports = {pushData,getData,pushcartData,getcartData,searchdata,deleteCart,pushlearningdata,getlearning}