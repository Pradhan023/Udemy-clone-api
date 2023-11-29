const  Dummydata = require("../Data")

const {AlldataCollection,AlladdTocartCollection} = require("../Model/model")
    
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

module.exports = {pushData,getData,pushcartData,getcartData}