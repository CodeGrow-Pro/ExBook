import './App.css';
import { Routes ,Route } from 'react-router-dom';
import User from './routes/user';
import Home from './routes/home';
import Blog from './routes/blog';
import About from './routes/about';
import Shop from './routes/shop';
import Contact from './routes/contact';
import Cart from './routes/cart';

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
      </Routes>
  );
}

export default App;
 