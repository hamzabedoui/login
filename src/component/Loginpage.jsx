import React, { useState } from "react";
import data from "./data";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { ToastContainer } from 'react-toastify';

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  localStorage.setItem("isLoggedIn", "false");
  const handleLogin = () => {
    const matchedUser = data.find(
      (user) => user.user === username && user.password === password
    );
    if (matchedUser) {
      console.log("Login successful");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      console.log("Invalid username or password");
      toast.error("Login failed. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div className="loginpage">
      <h1 className="pagetitle">Login Page</h1>
      <div className="infoblock">
        <div className="titleinterface">
          <h3 className="title">User :</h3>
          <h3>Password : </h3>
        </div>
        <div className="infointerface">
          <input
            type="text"
            className="interface"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="interface"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="btnblock">
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        <Link to={"/register"} className="register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Loginpage;
