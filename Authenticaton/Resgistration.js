const {AllregistrationCollection} = require("../Model/model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


const RegisterController = async(req,res)=>{
    const {username,email,password} = req.body;
    const salt = 10 ;

    const reqdb = await AllregistrationCollection.findOne({email:email})

    if(reqdb){
        return res.send({msg:"User is already registered"})
    }

    const hashpassword = bcrypt.hashSync(password,salt)

    const Obj = {
        username:username,
        email:email,
        password:hashpassword
    }

    await AllregistrationCollection.create(Obj)

    return res.send({msg:"User is Successfully Registered "})
}

const LoginController = async(req,res)=>{
    const {email,password} = req.body;
    
    const detailsdb = await AllregistrationCollection.find({})

    const details = detailsdb.find(item=>{
        if(item.email === email)
        {
            return item;
        }
    })

    if(details){
        const encrypt = bcrypt.compareSync(password,details.password);
        if(encrypt){
            const token = jwt.sign(
              {
                user: {
                  username: details.username,
                  email: details.email,
                  id: details.id,
                },
              },
              process.env.Secret_Key,
              { expiresIn: "7d" }
            );
            return res.send({msg:"User is successfully Login",name:details.username,email:details.email,token:token});
        }
        else {
            return res.send({msg:"Check Password"})
        }
        
    }
    else{
        return res.send({msg:"Check the Email or Try to Register again"})
    }
}

module.exports = {RegisterController,LoginController}