 import React from 'react';
 import "./Header.module.css";
 import logo from './img/logo.jpeg';

  const Header = (props) => {
    return (
       <header>
       <img src={logo} alt="logo"/>
       {props.children}
      </header>
    )
  }
  
  export default Header;
  