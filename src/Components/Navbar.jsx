import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar.css";
export default function Navbar(props) {
    const navigate = useNavigate();
    const handleClick = (path) => {
    navigate(path);
  };
    return(
        <>
            <nav className="navbar">
                <button onClick={() => handleClick('./Home.jsx')}>Home</button>
                <button onClick={() => handleClick('./loginpage.jsx')}>Login</button>   
            </nav>  
        </>
    )
};
