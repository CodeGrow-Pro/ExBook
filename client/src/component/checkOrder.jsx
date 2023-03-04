import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { razorpayConfig } from "../config/secretKey";
import PlaceOrder from "./PlaceOrder";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import CartContext from "../store/cart-Context";
const CheckOrder = (props) => {
  const tokenVal = localStorage.getItem("token")
  const token = {
    Authorization:'Bearer '+tokenVal
}      //when user not login then redirect  to login page
      const redirect = (isLogin)=>{
        if(!isLogin){
            window.location.href = '/#/ui/login'
        }
       }
       if(!tokenVal){
       window.onload(redirect(tokenVal))
       }
       //end
       
  const ctx = useContext(CartContext)
    const [successPayment, setSuccessPayment] = useState(false);
    const [failurePayment, setFaliurePayment] = useState(false);
    var userData = ""
    const getUserDetails = (user)=>{
         userData = user
    }
    useEffect(()=> {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])
    const openPayModal = (amt,userData) => {
        const amount = amt * 100; //Razorpay consider the amount in paise
        const options = {
          "key": razorpayConfig.key_id,
          "amount": amount, 
          "name": userData.name,
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
                url: 'https://exbookapis.onrender.com/ExBook/api/v1/transaction/payment',
                data: {
                    values,
                }
            })
            .then((res) =>{ 
              axios({
                method: 'post',
                url: 'https://exbookapis.onrender.com/ExBook/api/v1/order/create',
                data:{
                  payment_details:res.config.data,
                  items:ctx.items
                },
                headers:token
              }).then((resolve)=>{
                     console.log(resolve.data)
                     localStorage.setItem("cartItems",0)
                     localStorage.setItem("cartTotalPrice",0)
                    alert("Order Successfully! thanks for Order")
                    window.location.href = '/#/Myorder'
                }).catch((error)=>{
                  alert("Something want wrong")
                })
                setSuccessPayment(true)
                setFaliurePayment(false)
            }).catch(err => {
              console.log(err);
              setSuccessPayment(false)
              setFaliurePayment(true);
            })
          },
          "prefill":{
              "name":userData.name,
              "email":userData.email,
              "contact":userData.mobileNo,
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
            url: 'https://exbookapis.onrender.com/ExBook/api/v1/transaction/create',
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
         <Navbar />
         <Header heading="Order" />
        <PlaceOrder getUser={getUserDetails}  payableAmount = {ctx.totalAmount} >
        <button className="normal-btn"  onClick={()=>openPayModal(ctx.totalAmount,userData)}>{failurePayment ?'Payment Failed! Try again' :'Place Order'}</button>
        </PlaceOrder>
        <Footer />
      </>
    )  
  }
export default CheckOrder;