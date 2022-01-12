import React, { Component } from "react";
import "../index.css";
import GetCatPic from "./loadpic.js";
import Catinfo from "./catinfo";
import Buttons from "./buttons.js";

//import Cat2 from "./loadpic.jsx";

class Catpic extends Component {
  render() {
    return (
      <div className="one">
        <div className="picture">
          <GetCatPic />
        </div>
        <div className="infos">
          <Catinfo />
        </div>
        <div className="buy">
          <Buttons />
        </div>
      </div>
    );
  }
}

export default Catpic;
