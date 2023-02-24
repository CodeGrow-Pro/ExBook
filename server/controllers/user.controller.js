const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secretKey = require('../configs/secretKey');
exports.Signup = async (req,res)=>{
      const UserData = {
           name:req.body.name,
           email:req.body.email,
           password:bcrypt.hashSync(req.body.password,10),
           userType:req.body.userType,
      }
      try {
           const userRes = await User.create(UserData);
           if(!userRes){
                  return res.status(500).send({
                    message:"Internal server error! Please Try after some time."
                  })
           }
           return res.status(200).send({
            message:"SignUp Successfully."
          })
      } catch (error) {
        console.log(error.message)
        return res.status(500).send({
            message:"Internal server error! Please Try after some time."
          })
      }
}

exports.login = async (req,res)=>{
    const {email,password} = req.body;
       try {
            const userRes = await User.findOne({email:email});
            if(!userRes){
                return res.status(404).send({
                    message:`${email} does not exists.`
                })
            }
            const isValid = bcrypt.compareSync(password,userRes.password);
            if(!isValid){
                return res.status(400).send({
                    message:`Wrong Password`
                })
            }
            const token = jwt.sign({userId:userRes._id},secretKey,{
                expiresIn:'1d'
            })
            return res.status(200).send({
                message:"Login Successfully",
                user:userRes.name,
                accessToken : token
            })
       } catch (error) {
            console.log(error.message)
            return res.status(500).send({
                message:`Something want wrong!`
            })
       }
}