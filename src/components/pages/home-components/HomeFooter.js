import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../stylesheets/home-footer.css";
// import GoogleAuth from "./GoogleAuth";
let liArray = [false, false, false, false, false];

const HomeFooter = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const hover = (number) => (event) => {
    toggleHover();
    liArray[number] = !liArray[number];
  }

  return (
    <div className="footer">
        <div className="home-footer-split-dark"></div>
        <div className="home-footer-split-light"></div>
        <div className="footer-content">
            <h1>I WANT TO FIND...</h1>
            <div className="footer-input">
                <input placeholder="SEARCH" />
                <span>
                  <i data-feather="search"></i>
                </span>
            </div>
            <p>FEATURED SEARCHES:</p>
            <ul className="footer-list">
                <li onMouseOver={hover(1)} onMouseOut={hover(1)}><span className={(hovered && liArray[1]) ? 'hover' : ''}>AI</span></li>
                <li onMouseOver={hover(2)} onMouseOut={hover(2)}><span className={(hovered && liArray[2]) ? 'hover' : ''}>SPACE</span></li>
                <li onMouseOver={hover(3)} onMouseOut={hover(3)}><span className={(hovered && liArray[3]) ? 'hover' : ''}>WEATHER</span></li>
                <li onMouseOver={hover(4)} onMouseOut={hover(4)}><span className={(hovered && liArray[4]) ? 'hover' : ''}>UNIDENTIFIED LIFE FORMS</span></li>
                <li onMouseOver={hover(5)} onMouseOut={hover(5)}><span className={(hovered && liArray[5]) ? 'hover' : ''}>TRUMP WAR</span></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <ul className="footer-bottom-list-left">
              <li>LEGAL &#38; ADMINISTRATIVE</li>
              <li>SITE MAP</li>
              <li>CONTACT</li>
            </ul>
            <ul className="footer-bottom-list-right">
              <li><span className="twitter"><i data-feather="twitter"></i></span></li>
              <li><span className="facebook"><i data-feather="facebook"></i></span></li>
              <li><span className="instagram"><i data-feather="instagram"></i></span></li>
              <li><span className="youtube"><i data-feather="youtube"></i></span></li>
            </ul>
          </div>
    </div>
  );

};

export default HomeFooter;
