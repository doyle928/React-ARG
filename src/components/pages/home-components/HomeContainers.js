import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../stylesheets/home-containers.css";

const HomeContainers = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const style = {
    backgroundImage: `url(${props.image})`
  }

    return (
    <div className="home-info-container-main">
      <div className="home-container-card" onMouseOver={toggleHover} onMouseOut={toggleHover}>
        <h3>{props.genre}</h3>
        <h2 className={hovered ? 'home-container-h2 hover' : 'home-container-h2'}>{props.title}</h2>
        <div>
            <span className="home-container-facebook"><i className="feather" data-feather="facebook"></i></span>
            <span className="home-container-twitter"><i className="feather" data-feather="twitter"></i></span>
            <p>{props.date}</p>
        </div>

      </div>
      <div className={hovered ? 'home-container-image hover' : 'home-container-image'}>
        <span style={style} onMouseOver={toggleHover} onMouseOut={toggleHover}></span>
      </div>
    </div>

  );

};

export default HomeContainers;
