import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "../stylesheets/header.css";
import flag from '../stylesheets/images/flag-bw.svg'
// import GoogleAuth from "./GoogleAuth";

let stopTimer;
let alreadyRunning = false;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      windowPosition : 0,
      mousePosition : 0,
      hideNavBar : false
     };
  }
  handleScroll = (event) => {
    //console.log('handleScroll invoked');
    this.setState({ windowPosition: window.pageYOffset }) 
    //console.log(this.state.windowPosition);
    this.hideNavTimer();
  }
  autoHideNav = (event) => {
    if(this.state.windowPosition > 0){
      //console.log('autoHideNav invoked');
      if(window.event.screenY > 230){
        stopTimer = false;
        this.hideNavTimer();
      } else if(window.event.screenY <= 230) {
        stopTimer = true;
        this.setState({ mousePosition: window.event.screenY });
        this.hideNavTimer();
        this.setState({ hideNavBar : false });
      }
    }
  }

  hideNavTimer = () => {
    if(!alreadyRunning || stopTimer){
      alreadyRunning = true;
      let i = 0;
      let timer;
      timer = setInterval(() => {
        if(!stopTimer){
          if(i >= 50){
            clearInterval(timer);
            i = 0;
            alreadyRunning = false;
            this.setState({ hideNavBar : true });
          }
          i++;
          //console.log(i);
        } else {
          clearInterval(timer);
          i = 0;
          alreadyRunning = false;
        }
      }, 100);
      if(stopTimer){
        clearInterval(timer);
        i = 0;
        alreadyRunning = false;
      }
    }
  };

  componentDidMount(){
    console.log('componentDidMount invoked');
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousemove', this.autoHideNav);
  }

  componentWillUnmount(){
    console.log('componentWillUnmount invoked');
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('mousemove', this.autoHideNav);
  }

  render(){
  return (
    <div className={this.state.windowPosition == 0 ? 'header-container' : this.state.hideNavBar ? 'header-container-scrolled hidden' : 'header-container-scrolled'}>
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

};

export default Header;
