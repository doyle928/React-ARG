import React from "react";
import { Link } from "react-router-dom";
import "../../../stylesheets/home-footer.css";
// import GoogleAuth from "./GoogleAuth";

const HomeFooter = () => {
  return (
    <div className="footer">
        <div className="home-footer-split">
        <div className="footer-content">
            <h1>I WANT TO FIND...</h1>
            <div className="footer-input">
                <input placeholder="SEARCH" />
                <i data-feather="search"></i>
            </div>
            <p>FEATURED SEARCHES:</p>
            <ul>
                <li>AI</li>
                <li>SPACE</li>
                <li>WEATHER</li>
                <li>UNIDENTIFIED LIFE FORMS</li>
                <li>TRUMP WAR</li>
            </ul>
        </div>
        </div>
    </div>
  );
};

export default HomeFooter;
