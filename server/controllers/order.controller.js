const Order = require('../models/transaction');
const Razorpay = require('razorpay');
const { razorpayConfig } = require('../configs/secretKey');
const instance = new Razorpay(razorpayConfig);
const Transaction = require('../models/transaction');
exports.create = (req, res)=>{
    console.log(req.body);
    console.log("fdsfsaf")
    const options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: "order_rcptid_11",
    }

    instance.orders.create(options, (err, order)=>{
        if(err){
            return res.send(err)
        }
          else {
           return res.json(order)
        }
    })
} 

exports.payment = (req, res) => {

    const generated_signature = crypto.createHmac('sha256',razorpayConfig.key_secret)
    generated_signature.update(req.body.razorpay_order_id+"|"+ req.body.transactionid)
    
    if ( generated_signature.digest('hex') === req.body.razorpay_signature){
            const transaction = new Transaction({
                transactionid:req.body.transactionid,
                transactionamount:req.body.transactionamount,
            });
            transaction.save(function(err, savedtransac){
                if(err){
                    console.log(err);
                    return res.status(500).send("Some Problem Occured");
                }
                res.send({transaction: savedtransac});
            });
    }
    else{
        return res.send('failed');
    }
}