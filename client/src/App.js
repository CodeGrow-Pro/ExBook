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




function App() {
  return (
      <Routes>
          <Route  exact path="/" element={<Home />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/About-us" element={<About />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/register" element={<Regester />} />
          <Route exact path="/ui/login" element={<Login />}/>
          <Route path='*' element={<Errors />} />
      </Routes>
  );
}

export default App;
 
