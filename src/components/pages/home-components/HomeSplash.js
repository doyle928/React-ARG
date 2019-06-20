import React from "react";
import { Link } from "react-router-dom";
import "../../../stylesheets/home-splash.css";
// import GoogleAuth from "./GoogleAuth";

const HomeSplash = () => {
  return (
      <>
        <div className="home-splash-container"></div>
        <div className="home-splash-black-container"></div>
        <div className="home-splash-main">
            <h1 className="home-splash-main-one"><span>WELCOME TO</span>US.GOV</h1>
            <div className="home-splash-bottom">
                <span className="home-splash-know-us">GET TO KNOW US</span>
            </div>
        </div>
    </>
  );
};

export default HomeSplash;
