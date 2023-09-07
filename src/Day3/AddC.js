import React, { Component } from "react";

export default class AddC extends Component {
  constructor() {
    super()
    this.num1 =0;
    this.num2 = 0;
    this.state = {result:0}
  }

  handler=()=>{
    let sum = parseInt(this.num1)+ parseInt(this.num2);
    this.setState({result:sum})
  }

  render() {
    return (
      <>
        First Number: <input type="text" onBlur={(e) => {this.num1=e.target.value}} />
        <br />
        Second Number: <input type="text" onBlur={(e) => {this.num2=e.target.value}} />
        <br />
        <input type="button" value="Add" onClick={this.handler}/>
        <br />
        <p>Result: {this.state.result} </p>
      </>
    );
  }
}
