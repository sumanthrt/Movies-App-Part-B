import React, { Component } from "react";
import "./Header.css";
import logo from "./logo.svg";

function Header(props) {
  return (
    <div className="header">
      <img src={logo} alt="logo" id="logo" />
      <div className="buttons">
        <button className={props.btnType}>{props.buttonName}</button>
        <button className={props.btnType2}>{props.buttonName2}</button>
        <button className={props.btnType3}>{props.buttonName3}</button>
      </div>
    </div>
  );
}

export default Header;
