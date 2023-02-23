import './App.css';
import { Routes ,Route } from 'react-router-dom';
import User from './routes/user';
import Home from './routes/home';
import Blog from './routes/blog';
import About from './routes/about';
import Shop from './routes/shop';
import Contact from './routes/contact';
import Cart from './routes/cart';
import Login from './routes/Login';

const loginHandler = async(userData)=>{
  await fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
      user: userData
    })
  });
  console.log(userData);
}


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/user" element={<User />} />
          <Route path="/ui/login" element={<Login onSubmit={loginHandler}/>} exact/>
      </Routes>
  );
}

export default App;
 
