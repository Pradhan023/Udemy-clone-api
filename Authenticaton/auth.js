// const jwt = require('jsonwebtoken');

// const auth = (req,res,next)=>{
//     let token
//     const authheader = req.headers.Authorization || req.headers.authorization;
//     // console.log(authheader);

//     if(authheader && authheader.startsWith("Bearer")){
//         token = authheader.split(" ")[1];
//         jwt.verify(token,process.env.Secret_Key,(err,decoded)=>{
//             if(err){
//                 res.status(401)
//                 throw new Error("User is not authorized")
//             }
//             req.user = decoded.user;
//             next();
//         })
//         if(!token){
//             res.status(401);
//             throw new Error("User is not authorized or token is missing")
//         }
//     }

// }

// module.exports = auth