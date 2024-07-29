import React from "react";
import "./Navbar.css";
import logo from "../Images/Logo.jpeg";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar bg-body-tertiary navb">
        <div className="d-flex justify-content-between px-5">
          <div>
            <img src={logo} className="img-fluid logo" alt="logo" />
          </div>

           </div>
      </nav>
    </>
  );
}
