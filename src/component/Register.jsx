//import React, { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //const [userdata, setUserdata] = useState(data)
  // useEffect(() => {

  // }, [username, password])
  const checkdata = () => {
    const match = data.find(
      (user) => user.password === password && user.user === username
    );
    console.log(match);
    if (username.length >= 5 && /\d{5,}/.test(password) && !match) {
      const newinput = {
        id: data.length + 1,
        user: username,
        password: password,
      };
      
      data.push(newinput);
      setUsername("");
      setPassword("");
      console.log(data);
      navigate("/");
      toast.success("You have been registred!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
    } else {
      toast.warn("Please check your informations !", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
    }
  };
  return (
    <div className="registermain">
      <h2>please enter your information</h2>
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
      <button className="btn" onClick={checkdata}>
        Submit
      </button>
    </div>
  );
};
export default Register;
