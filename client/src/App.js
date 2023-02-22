import './App.css';
import { Routes ,Route } from 'react-router-dom';
import User from './routes/user';
import Login from './component/Login';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/user" element={<User />} />
      </Routes>
      
  );
}

export default App;
