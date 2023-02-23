import React from "react";
import Card from "../component/UI/Card";
import classes from './Login.module.css'
import Button from "../component/UI/Button";
import Navbar from "../component/Navbar";
import Header from "../component/Header";

const Login = () => {
    return (
        <>
        <Navbar />
        <Header  heading="Login"/>
        {/* <div className={classes['img-wrap']}>
            <img className={classes.loginBanner} src="https://cdn.literacytrust.org.uk/media/images/6ef30a3dddeb.2e16d0ba.fill-950x365.jpg"/>
        </div> */}
        <div className={classes.centreBtn}>
            <Button><a>SHOP </a>  LOGIN </Button>
        </div>
        <div className={classes.container}>
            <Card> 
                <h2>NEW CUSTOMER</h2>
                <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                <br/>
                <Button>CREATE NEW ACCOUNT</Button>
            </Card>
            <Card> 

                <h2>LOGIN</h2>
                <p>If you have an account with us, please log in.</p>
                <div className={classes.loginInput}>
                    <label htmlFor="email"> Email</label>
                    <input type='text' id="email"></input>
                    <label htmlFor="email">Password</label>
                    <input type='text' id="email"></input>    
                </div>
                <div className={classes.loginSubmit}>
                    <Button>Login</Button> 
                    <div>Forgot Password</div>    
                </div>
                
            </Card>
            
        </div>
        </>
        
    )
}

export default Login;