import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../../stylesheets/home-containers.css";
// import GoogleAuth from "./GoogleAuth";

// class HomeContainers extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleMouseHover = this.handleMouseHover.bind(this);
  //   this.state = {
  //     isHovering: false,
  //   };
  // };

  // handleMouseHover() {
  //   this.setState(this.toggleHoverState);
  // }

  // toggleHoverState(state) {
  //   console.log(state);
  //   return {
  //     isHovering: !state.isHovering,
  //   };
  // };
const HomeContainers = (props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const style = {
    backgroundImage: `url(${props.image})`
  }

  // render(){
    return (
    <div className="home-info-container-main">
      <div className="home-container-card" onMouseOver={toggleHover} onMouseOut={toggleHover}>
        <h3>{props.genre}</h3>
        <h2 className={hovered ? 'home-container-h2 hover' : 'home-container-h2'}>{props.title}</h2>
        <div>
            <span className="home-container-facebook"><i data-feather="facebook"></i></span>
            <span className="home-container-twitter"><i data-feather="twitter"></i></span>
            <p>{props.date}</p>
        </div>

      </div>
      <div className={hovered ? 'home-container-image hover' : 'home-container-image'}>
        <span style={style} onMouseOver={toggleHover} onMouseOut={toggleHover}></span>
      </div>
    </div>

  );
    // }
};

export default HomeContainers;
