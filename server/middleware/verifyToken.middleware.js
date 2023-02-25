const jwt = require("jsonwebtoken");
const secretKey = require("../configs/secretKey");

exports.isAuthorized = (req,res,next)=>{
     const header = req.headers
     if(!header){
        return res.status(400).send({
            message:"Bad Request !  Please pass AccessToken in Header."
        })
     }
     const  token = header['authorization'].split(' ')[1];
     if(!token){
        return res.status(400).send({
            message:"Bad Request !  Token Not Found!"
        })
     }
     jwt.verify(token,secretKey,(err,decoded)=>{
        if(err){
              return res.status(403).send({
                message:"Unauthorized User!"
              })
        }
        req.userId = decoded.userId
        next()
     })
}