import React, { useState } from "react";
import Navlink from "./Navlink";
import "./Navbar.css";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navlink, setNavlink] = useState(Navlink);

  const navigate = useNavigate();
  function handlechangeLogOut(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="navbar">
      {navlink.map((index) => (
        <div key={index.id}>
          <a href={index.href}>{index.name}</a>
        </div>
      ))}
      <div className="navbar-ext">
        <button onClick={handlechangeLogOut} className="nav-btn-login">
          Log out
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
