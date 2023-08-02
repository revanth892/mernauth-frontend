import './App.css';
import {Route,Routes} from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup';
import Welcome from './components/Welcome';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/user" element={<Welcome/>}/>
        </Routes>
    </div>
  );
}

export default App;
