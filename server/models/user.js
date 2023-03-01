const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avtar:{
       type:String,
    },
    userType:{
        type:String,
        required:true,
        enum:['CUSTOMER','ADMIN','SELLER']
    },
    languages:{
        type:String,
        default:"Hindi"
    },
    age:{
        type:Number,
    },
    mobileNo:{
        type:String
    },
    address:{
        type:String
    },
    city:{
        type:String
    },
    createdAt:{
        type:String,
        default:()=>{
            return Date.now()
        },
        immutable:true
    },
    updatedAt:{
        type:String,
        default:()=>{
            return Date.now()
        }
    }
});

module.exports = mongoose.model('User', UserSchema);