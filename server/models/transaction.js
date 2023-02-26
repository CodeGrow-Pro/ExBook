const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    transactionid:{
        type:String
    },
    transactionamount:{
        type:String
    },
}) 

module.exports = mongoose.model('Transaction', transactionSchema);  