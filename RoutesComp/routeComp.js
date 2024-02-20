const {pushData,getData,pushcartData,getcartData,searchdata, deleteCart,pushlearningdata,getlearning, removecart} = require("../Controller/DataController")
const {RegisterController,LoginController} = require("../Authenticaton/Resgistration");
const auth = require("../Authenticaton/auth");

const stripe = require("stripe")("sk_test_51OFIngSEzJx90BYMvlwLR2NykMIoiQcq4igz8DQEBl8Da28O4dIe4uWEHLSmLR0boVDncoqMz0k0GRaKMavG8Tne00R5o4kr6D")

const route = require("express").Router()

route.post("/pushdata",pushData);
route.get("/getdata",getData);
route.post("/addcart",auth,pushcartData);
route.get("/getcartdata",auth,getcartData)

route.post("/register",RegisterController);
route.post("/login",LoginController)

route.get("/search",searchdata)

route.post("/mylearning",auth,pushlearningdata)
route.get("/getlearningdata",auth,getlearning)

route.delete("/deleteallcart",auth,deleteCart)
route.post("/removeitem",auth,removecart)

//Payment route
route.post("/out/create-checkout-session",async(req,res)=>{
    const{Cartitem,Total} = req.body
    // console.log(products);
    const PurchaseItem =Cartitem.map((item)=>({
        price_data:{
            currency:"inr",
            product_data:{
                
                name:item.heading,

            },
            unit_amount:item.price * 100
        },
        quantity:item.quantity || 1
       }))
       const session =await stripe.checkout.sessions.create({
        payment_method_types:["card"],
         line_items:PurchaseItem,
        mode:"payment",
        success_url:"https://euphonious-blini-b979a0.netlify.app/",
        cancel_url:"https://euphonious-blini-b979a0.netlify.app/",
    })
    res.json({id:session.id})
})

module.exports = route