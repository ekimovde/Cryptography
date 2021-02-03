import React from "react";
import { NavLink } from "react-router-dom";

import { brandImg } from "assets";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_div">
        <NavLink to="/">
          <img className="navbar__brand" src={brandImg} alt="anicons" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
