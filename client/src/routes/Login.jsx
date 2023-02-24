import React, { useCallback } from "react";
import Card from "../component/UI/Card";
import classes from './Login.module.css'
import Button from "../component/UI/Button";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import useInput from "../hooks/use-input";
import Footer from "../component/Footer";

const Login = (props) => {

    const { value: enteredEmail, hasError: emailInputHasError, isValid: emailIsValid, valueHandler: emailChangeHandler, touchHandler: emailTouchHandler, reset: emailReset} = useInput(value => value.trim() !== '');
    const { value: enteredPassword, hasError: passwordInputHasError, isValid: passwordIsValid, valueHandler: passwordChangeHandler, touchHandler: passwordTouchHandler, reset: passwordReset} = useInput(value => value.trim() !== '');

    const emailInputClasses = emailInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    const passwordInputClasses = passwordInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    let formIsValid = false;
    if(emailIsValid && passwordIsValid) {
        formIsValid = true;
    }
    const confirmHandler = (event) => {
        // event.preventDefault();
        console.log("Submit");
        if(!formIsValid) {
            return;
        }
        props.onSubmit({
            email: enteredEmail,
            password: enteredPassword
        })
        emailReset();
        passwordReset();
    }
    return (
        <>
        <Navbar />
        <Header  heading="Login"/>
        {/* <div className={classes['img-wrap']}>
            <img className={classes.loginBanner} src="https://cdn.literacytrust.org.uk/media/images/6ef30a3dddeb.2e16d0ba.fill-950x365.jpg"/>
        </div> */}
        <div className={classes.centreBtn}>
            {/* <Button><a>SHOP </a>  LOGIN </Button> */}
        </div>
        <div className={classes.container}>
            <Card> 
                <h2>NEW CUSTOMER</h2>
                <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                <br/>
                <Button >CREATE NEW ACCOUNT</Button>
            </Card>
            <Card> 
                <h2>LOGIN</h2>
                <p>If you have an account with us, please log in.</p>
                <form onSubmit={confirmHandler} className={classes.form}>
                    <div className={classes.loginInput}>
                        <div className={emailInputClasses}>
                            <label htmlFor="email"> Email</label>
                            <input type='text' id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailTouchHandler}></input>
                            {emailInputHasError && <p className={classes.errorText}>Error</p>}
                        </div>
                        <div className={passwordInputClasses}>
                            <label htmlFor="password"> Password</label>
                            <input type='text' id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordTouchHandler}></input>
                            {passwordInputHasError && <p className={classes.errorText}>Error</p>}
                        </div>   
                    </div>
                    <div className={classes.loginSubmit}>
                        <Button  onClick={confirmHandler}>Login</Button> 
                        <div>Forgot Password</div>    
                    </div>   
                </form>
            </Card>
            
        </div>
        <Footer />
        </>
        
    )
}

export default Login;