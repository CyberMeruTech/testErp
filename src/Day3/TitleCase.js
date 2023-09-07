import React, { Component } from "react";
import './mycss.css'

export default class TitleCase extends Component {
  showTitleCase() {
    let titleCaseRes = this.props.userInput
      .toLowerCase()
      .split(' ')
      .map((w) => {
       return  w.charAt(0).toUpperCase() + w.slice(1);
      })
      .join(' ');
    return titleCaseRes;
  }
  render() {
    return (
      <>
      <h2>TitleCase</h2>
      <div className='bordered-box'>
        <p>{this.showTitleCase()}</p>
        </div>
      </>
    );
  }
}
