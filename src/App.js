import Home from "./component/Home";
import Loginpage from "./component/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          
          <Route path="/home" element={<Home />} /> 
          
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
