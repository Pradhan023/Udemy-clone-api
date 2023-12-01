const {pushData,getData,pushcartData,getcartData,searchdata} = require("../Controller/DataController")
const {RegisterController,LoginController} = require("../Authenticaton/Resgistration")

const route = require("express").Router()

route.post("/pushdata",pushData);
route.get("/getdata",getData);
route.post("/addcart",pushcartData);
route.get("/getcartdata",getcartData)

route.post("/register",RegisterController);
route.post("/login",LoginController)

route.get("/search",searchdata)

module.exports = route