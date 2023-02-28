const Order = require('../models/order');

exports.getOrderByUserId =async  (req,res)=>{
       try {
             const OrderData = await Order.find({user:req.userId})
             if(!OrderData) {
                return res.status(404).send({
                    message:"Order does not exists!"
                })
             }
             return res.status(200).send({
                message:"Get Order Successfully.",
                Order_Details:OrderData
             })
       } catch (error) {
        console.log(error.message)
        return res.status(500).send({
            message:"Internal server error",
         })
       }
}

exports.createOrder = async (req,res)=>{
    const body = req.body;
    const payment = JSON.parse(body.payment_details).values
    const total = (payment.transactionamount / 100 ) || 0
    const createOrderData = {
        books:body.items,
        transaction_id:payment.transactionid,
        razorpay_order_id:payment.razorpay_order_id,
        payment_status:"success",
        user:req.userId,
        total:total,
        quantity:body.items.length
    }
    try {
           const orderRes = await Order.create(createOrderData)
           return res.status(201).send({
            message:"order create successfully."
           })
    } catch ( error ) {
        console.log(error)
        return res.status(500).send({
            message:"Internal server error!"
           })
    }
}
const deleteOrder = (req,res)=>{

}
