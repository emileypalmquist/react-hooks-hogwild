import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
  return (
    <div className="navWrapper">
      <h1 className="headerText">HogWild</h1>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
