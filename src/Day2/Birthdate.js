import React, { Component } from "react";

export default class Birthdate extends Component {
  constructor() {
    super();
    this.dayOfBirth = "";
    this.dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    this.state = {
        bday:" ",
        curbday:" ",
    }
  }
  handler = (event) => {
    let inputdate = event.target.value;
    let date = new Date(inputdate);
    this.dayOfBirth = date.getDay();
    console.log("Day on your birth: ", this.dayNames[this.dayOfBirth]);
    this.setState({bday:this.dayNames[this.dayOfBirth]});
    let currDate = new Date();
    let currYear = currDate.getFullYear();
    let bdCurrYear = new Date(currYear, date.getMonth(), date.getDate());
    let dayBdCurrYear = bdCurrYear.getDay();
    console.log(
      "Birthday in current year is on : " + this.dayNames[dayBdCurrYear]
    );
    this.setState({curbday:this.dayNames[dayBdCurrYear]});
  };
  render() {
    return (
        <>
            <input type="date" onChange={this.handler} />
            <p>Day on your birth: {this.state.bday}</p>
            <p>Birthday in current year is on: {this.state.curbday}</p>
        </>
    );
    
  }
}
