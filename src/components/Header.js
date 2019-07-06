import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/header.css";
import flag from '../stylesheets/images/flag-bw.svg'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
          <img src={flag} />
          <NavLink className="header-us-gov" to="/">U.S.<br/>DEPT OF<br/><span>GOVERNMENT</span></NavLink>
      </div>
      <div className="header-right">
        <NavLink className="header-right-link" to="/">Our Story</NavLink>
        <NavLink className="header-right-link" to="/">Know Your Gov</NavLink>
        <NavLink className="header-right-link" to="/">Ask Us</NavLink>
        <NavLink className="header-right-link" to="/">Newsroom</NavLink>
        <div className="hamburger-header">
          <i className="material-icons">menu</i>
        </div>
      </div>
    </div>
  );
};

export default Header;
