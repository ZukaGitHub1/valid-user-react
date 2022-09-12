import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [validations, setValidations] = useState({
    name: "",
    email: "",
  });

  const validateAll = () => {
    const { name, email } = values;
    const validations = { name: "", email: "" };
    let isValid = true;

    if (!name) {
      validations.name = "Username is required";
      isValid = false;
    }

    if ((name && name.length < 3) || name.length > 15) {
      validations.name = "Username must contain between 3 and 15 characters";
      isValid = false;
    }

    if (!email) {
      validations.email = "Email is required";
      isValid = false;
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = "Email format must be as example@mail.com";
      isValid = false;
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      message = `${name} is required`;
    }

    if (value && name === "name" && (value.length < 3 || value.length > 15)) {
      message = "Username must contain between 3 and 15 characters";
    }

    if (value && name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
    }

    setValidations({ ...validations, [name]: message });
  };
 function handleChangeRegistration(e){
  e.preventDefault()
  navigate('/registration')
 }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateAll();

    if (!isValid) {
      return false;
    }

    navigate("/main");
  };
  
  const { name, email } = values;

  const { name: nameVal, email: emailVal } = validations;

  return (
    <div className="login-box">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
         
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={name}
              onChange={handleChange}
              onBlur={validateOne}
            />
         
          <div className="error">{nameVal}</div>
        </div>
      
        <div className="user-box">
         
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              onBlur={validateOne}
            />
          
          <div className="error">{emailVal}</div>
        </div>
        <button  className="custom-btn btn-1">Login</button>
      </form>
      <h4>if you don't have any accout  <button onClick={handleChangeRegistration}>Registration</button></h4>
    </div>
  );
};
export default Login;
