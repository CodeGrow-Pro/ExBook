const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    coverpage:{
       type:String,
    },
    category_id: {
        type: String
    },
    createdAt:{
        type:String,
        default:()=>{
            return Date.now()
        },
        immutable:true
    },
    updatedAt: {
        type:String,
        default:()=>{
            return Date.now()
        },
    }
});

module.exports = mongoose.model('Book', BookSchema);