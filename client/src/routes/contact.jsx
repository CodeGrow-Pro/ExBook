import React,  { useRef, useEffect, useState }  from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import mapboxgl from 'mapbox-gl';
import classes from './contact.module.css'
import Card from '../component/UI/Card'
import useInput from '../hooks/use-input'
import Button from '../component/UI/Button'
mapboxgl.accessToken = "pk.eyJ1Ijoib2poYWFrc2hhdCIsImEiOiJja25tcXZqdHYwcnZ3Mm9wcnlxbHJrOHAwIn0.6qqIdOCB_Q5Fxn7NakzWcg";

const Contact = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const { value: enteredEmail, hasError: emailInputHasError, isValid: emailIsValid, valueHandler: emailChangeHandler, touchHandler: emailTouchHandler, reset: emailReset} = useInput(value => value.trim() !== '');
  const { value: enteredName, hasError: nameInputHasError, isValid: nameIsValid, valueHandler: nameChangeHandler, touchHandler: nameTouchHandler, reset: nameReset} = useInput(value => value.trim() !== '');
  const { value: enteredNumber, hasError: numberInputHasError, isValid: numberIsValid, valueHandler: numberChangeHandler, touchHandler: numberTouchHandler, reset: numberReset} = useInput(value => value.trim() !== '');
  const { value: enteredMsg, hasError: msgInputHasError, isValid: msgIsValid, valueHandler: msgChangeHandler, touchHandler: msgTouchHandler, reset: msgReset} = useInput(value => value.trim() !== '');
  const emailInputClasses = emailInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
  const nameInputClasses = nameInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
  const numberInputClasses = numberInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
  const msgInputClasses = msgInputHasError ? `${classes.control} ${classes.invalid}` : `${classes.control}`;
  let formIsValid = false;
    if(emailIsValid && nameIsValid && numberIsValid && msgIsValid) {
        formIsValid = true;
  }

  useEffect(() => {
    if (map.current) return; 
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [lng, lat],
    zoom: zoom
    });
  });
  
  useEffect(() => {
    if (!map.current) return; 
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
  });
  const confirmHandler = (event) => {
    // event.preventDefault();
    console.log("Submit");
    if(!formIsValid) {
        return;
    }
    
    emailReset();
    nameReset();
    numberReset();
    msgReset();
  }
  return (
    <div>
        <Navbar />
        <Header heading="Contact" />
        <div className={classes.containerContact}>
          <div className={classes.mapContainerClasses} ref={mapContainer}></div>        
          <Card className={classes.contactCard}>
            <form className={classes.form}>
              <h4 className={classes.orange}>CONTACT US</h4>
              <h2 className={classes.blue}>Get In Touch With Us</h2>
              <div className={nameInputClasses}>
                  <input type='text' id="name" value={enteredName} placeholder="Name" onChange={nameChangeHandler} onBlur={nameTouchHandler}></input>
                  {nameInputHasError && <p className={classes.errorText}>Error</p>}
              </div><div className={emailInputClasses}>
                  <input type='text' id="email" value={enteredEmail} placeholder="Email" onChange={emailChangeHandler} onBlur={emailTouchHandler}></input>
                  {emailInputHasError && <p className={classes.errorText}>Error</p>}
              </div><div className={numberInputClasses}>
                  <input type='text' id="number" value={enteredNumber} placeholder="Contact" onChange={numberChangeHandler} onBlur={numberTouchHandler}></input>
                  {numberInputHasError && <p className={classes.errorText}>Error</p>}
              </div><div className={msgInputClasses}>
                  <input type='text' id="message" value={enteredMsg} placeholder="Message" onChange={msgChangeHandler} onBlur={msgTouchHandler}></input>
                  {msgInputHasError && <p className={classes.errorText}>Error</p>}
              </div>
              <Button className={classes.orange}>Submit</Button>
            </form>
          </Card>
        </div>
        <img className={classes.img1} src="https://bookland.dexignzone.com/react/demo/static/media/bg2.9172cc57b0e7b8d65aa4.jpg" alt="IMG" />
        <Newsletter />
        <Footer />
    </div>
  )
}
 
export default Contact