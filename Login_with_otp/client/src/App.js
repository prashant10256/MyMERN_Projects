import Login from "./pages/Login"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
import Headres from "./components/Headres";
import { Routes, Route,  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';

function App() {
  return (
    <>
    <Headres/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user/otp' element={<Otp/>}/>
      <Route path='/*' element={<Error/>}/>

    </Routes>
    </>
  );
}

export default App;
