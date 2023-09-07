import React, { Component } from "react";
import './mycss.css';
import AllCaps from "./AllCaps";
import Reverse from "./Reverse";
import TitleCase from "./TitleCase";
import DivideAndConquer from "./DivideAndConquer";

export default class InputComponentC extends Component {
  constructor(){
    super();
    this.state = {str:""}
  }
    render() {
    return (
      <>
        <h1>String Functions</h1>
        <div className="bordered-box">
          <input type="text" className="text-field" placeholder="Enter text" onInput={(e)=>{this.setState({str:e.target.value})}} />
          {/* <p>{this.state.str}</p> */}
        </div>
        <Reverse userInput = {this.state.str}></Reverse>
        <AllCaps userInput = {this.state.str}></AllCaps>
        <TitleCase userInput = {this.state.str}></TitleCase>
        <DivideAndConquer userInput = {this.state.str}></DivideAndConquer>
        
      </>
    );
  }
}
