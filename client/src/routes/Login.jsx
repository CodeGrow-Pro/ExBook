import React, { useCallback, useEffect } from "react";
import axios from 'axios'
import Card from "../component/UI/Card";
import classes from './Login.module.css'
import Button from "../component/UI/Button";
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import useInput from "../hooks/use-input";
import Footer from "../component/Footer";
import { Link, redirect } from "react-router-dom";
import { useLocation } from "react-router-dom"
import Regester from "./regester";
import User from "./user";
import { render } from "react-dom";
import AdBanner from "../component/AdBanner";

const Login = (props) => {
    const { value: enteredEmail, hasError: emailInputHasError, isValid: emailIsValid, valueHandler: emailChangeHandler, touchHandler: emailTouchHandler, reset: emailReset } = useInput(value => value.trim() !== '');
    const { value: enteredPassword, hasError: passwordInputHasError, isValid: passwordIsValid, valueHandler: passwordChangeHandler, touchHandler: passwordTouchHandler, reset: passwordReset } = useInput(value => value.trim() !== '');
    const emailInputClasses = emailInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    const passwordInputClasses = passwordInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
    let formIsValid = false;
    if (emailIsValid && passwordIsValid) {
        formIsValid = true;
    }
    const loginHandler = async (userData) => {
        const response = await axios.post('https://exbookapis.onrender.com/ExBook/api/v1/user/login', userData)
            .then((res) => {
                console.log(res.data.accessToken)
                localStorage.setItem("token", res.data.accessToken)
                window.history.back()
            })
            .catch((err) => {
                alert('Something went wrong! Try again!')
            })
    }
    const confirmHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        loginHandler({
            email: enteredEmail,
            password: enteredPassword
        })
        emailReset();
        passwordReset();
    }
    //page redirect
    const redirect = (event) => {
        event.preventDefault();
        window.location.href = '/register'
    }
    return (
        <>
            <Navbar />
            <Header heading="Login" />
            <div className={classes.centreBtn}>
                {/* <Button><a>SHOP </a>  LOGIN </Button> */}
            </div>
            <div className={classes.container}>
                <Card>
                    <h2 className="logo">NEW CUSTOMER</h2>
                    <p id="ptext">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                    <br />
                    <Button><Link to="/register" component={Regester}>CREATE NEW ACCOUNT</Link></Button>
                </Card>
                <Card>
                    <h2 className="logo">LOGIN</h2>
                    <p>If you have an account with us, please log in.</p>
                    <form onSubmit={confirmHandler} className={classes.form}>
                        <div className={classes.loginInput}>
                            <div className={emailInputClasses}>
                                <label htmlFor="email"> Email</label>
                                <input type='text' id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailTouchHandler} placeholder="enter your email"></input>
                                {emailInputHasError && <p className={classes.errorText}>Error</p>}
                            </div>
                            <div className={passwordInputClasses}>
                                <label htmlFor="password"> Password</label>
                                <input type='text' id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordTouchHandler} placeholder=" * * ** * * * * * * * *"></input>
                                {passwordInputHasError && <p className={classes.errorText}>Error</p>}
                            </div>
                        </div>
                        <div className={classes.loginSubmit}>
                            <Button onClick={confirmHandler}>Login</Button>
                            <div>Forgot Password</div>
                        </div>
                    </form>
                </Card>

            </div>
            <AdBanner />
            <Footer />
        </>

    )
}

export default Login;