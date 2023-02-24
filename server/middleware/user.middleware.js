const userType = require("../constent/constent")

exports.UserBodyDataFilter = (req,res,next) =>{
      const body = req.body
      if(!body.name || !body.email || !body.password || !body.userType){
           return res.status(400).send({
            message:"Bad Request .",
            success:"false"
           })
      }

      if(!userType[body.userType.toUpperCase()]){
        return res.status(400).send({
            message:"Bad Request .",
            success:"false"
           })
      }else{
        req.body.userType = body.userType.toUpperCase()
      }
      next();
}
exports.loginBodyDataFilter =  (req,res,next)=>{
    const body = req.body;
    if(!body.email || !body.password){
      return res.status(400).send({
          message:"Bad Request ! "
      })
    }
    next()
}
