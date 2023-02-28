const mongoose = require('mongoose');
const book = require('./book');
const user = require('./user');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    books:{  
        type:[],
        required:true
    },
    payment_status: {
        type: String,
        enum: ['pending', 'success', 'failure'],
        default: 'pending'
    },
    transaction_id:{
        type:String
    },
    razorpay_order_id:{
        type:String
    },
    user: {
        type:mongoose.SchemaTypes.String,
        ref: 'user',
        required:true
    },
    total:{
       type:String,
    },
    quantity: {
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

module.exports = mongoose.model('Order', OrderSchema);