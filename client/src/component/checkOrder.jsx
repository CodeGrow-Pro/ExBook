import { useEffect, useState } from "react";
import axios from 'axios';
import razorpayConfig from "../config/secretKey";
const CheckOrder = (props) => {
    const [amount, setAmount] = useState(1);
    useEffect(()=> {
        console.log("runing")
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        console.log(script);
    }, [])
    const openPayModal = (amt) => {
        const amount = amt * 100; //Razorpay consider the amount in paise
        console.log(amount);
        const options = {
          "key": razorpayConfig.key_id,
          "amount": amount, 
          "name": "",
          "description": "",
          'order_id':"",
          "handler": function(response) {
              console.log(response);
              const values ={
                  razorpay_signature : response.razorpay_signature,
                  razorpay_order_id : response.razorpay_order_id,
                  transactionid : response.razorpay_payment_id,
                  transactionamount : amount,
                }
            axios({
                method: 'post',
                url: 'http://localhost:8000/ExBook/api/v1/order/payment',
                data: {
                    values,
                }
            })
            //   axios.post('http://localhost:8000/ExBook/api/v1/order/payment',values)
            .then(res=>{alert("Success")})
            .catch(e=>console.log(e))
          },
          "prefill":{
              "name":'Sanjana Kumari',
              "email":'sanjana@gmail.com',
              "contact":'1234567890',
          },
          "notes": {
            "address": "Hello World"
          },
          "theme": {
            "color": "#528ff0"
          }
        };
        axios({
            method: 'post',
            url: 'http://localhost:8000/ExBook/api/v1/order/create',
            data: {
              amount,
            }
          })
        .then(res=>{
            options.order_id = res.data.id;
            options.amount = res.data.amount;
            console.log(options)
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        })
        .catch(e=>console.log(e.message))
        
    };
    return (

        <button onClick={()=>openPayModal(amount)}>Confirm Address and Amount</button>
    )

}

export default CheckOrder;