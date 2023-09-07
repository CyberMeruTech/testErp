import React, { Component } from 'react'

export default class AddAllC extends Component {
    constructor(){
        super();
        this.state = {
            num:0,
            sum:0,
            displaySum:0
        }
    }
    handler=(event)=>{
       let number = parseInt(event.target.value);
       let updateSum = this.state.sum + number;
        this.setState({
            sum: updateSum,
            num: number,
            displaySum: `${this.state.sum} + ${number} = ${updateSum}`,
        });
        //console.log(this.state.sum)
        
    }
  render() {
    return (
      <div>
        <input type='number' onBlur={this.handler} />
        <p>{this.state.displaySum}</p>
      </div>
    )
  }
}
