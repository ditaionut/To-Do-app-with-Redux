import React, { useEffect, useState } from "react";
import './Nav.css';

const Nav = () => {
    const[show, handleShow] = useState(false)

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else{
                handleShow(false);
            }
            return () => {
                window.removeEventListener("scroll");
            }
        })
    }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img className="nav__avatar" src="https://www.pikpng.com/pngl/m/55-551794_free-netflix-accounts-logo-netflix-icon-clipart.png" alt="Netflix Logo" />
    </div>
  );
};

export default Nav;
