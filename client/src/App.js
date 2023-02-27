import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'

import { Routes ,Route } from 'react-router-dom';
import User from './routes/user';
import Home from './routes/home';
import Blog from './routes/blog';
import About from './routes/about';
import Shop from './routes/shop';
import Contact from './routes/contact';
import Cart from './routes/cart';
import Login from './routes/Login';
import Errors from './routes/Errors';
import Regester from './routes/regester';
import CheckOrder from './component/checkOrder';
import CartProvider from './store/cartProvider';
import MyContextOutlet from './component/MyContextOutlet';
import MyOrder from './routes/MyOrder';




function App() {
  return (
      <Routes>
        <Route element={<MyContextOutlet/>}>
          <Route  exact path="/" element={<Home />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/About-us" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/register" element={<Regester />} />
          <Route exact path="/ui/login" element={<Login />}/>
            <Route exact path='/checkOrder' element={<CheckOrder />} />
            <Route exact path="/Shop" element={<Shop />} />
            <Route exact path="/Cart" element={<Cart />} />  
            <Route exact path="/MyOrder" element={<MyOrder />} />  
          </Route>
          <Route path='*' element={<Errors />} />
      </Routes>
  );
}

export default App;
 
