import { useEffect, useState } from "react";
import axios from 'axios';
import { razorpayConfig } from "../config/secretKey";

const CheckOrder = (props) => {
    const [successPayment, setSuccessPayment] = useState(false);
    const [failurePayment, setFaliurePayment] = useState(false);
    const [amount, setAmount] = useState(1);
    useEffect(()=> {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])
    const openPayModal = (amt) => {
        const amount = amt * 100; //Razorpay consider the amount in paise
        const options = {
          "key": razorpayConfig.key_id,
          "amount": amount, 
          "name": "",
          "description": "",
          'order_id':"",
          "handler": function(response) {
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
            .then(res => setSuccessPayment(true))
            .catch(err => {
              console.log(err);
              setFaliurePayment(true);
            })
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
            "color": "#eaa451"
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
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        })
        .catch(e=>console.log(e.message))
        
    };
    
    return(
      <>
        {(!successPayment) && <button onClick={()=>openPayModal(amount)}>Confirm Address and Amount</button>}
        {(successPayment) && <p>Success</p>}
        {(failurePayment) && <p>Try again, someting went wrong !!</p>}
      </>
    )  
  }
export default CheckOrder;