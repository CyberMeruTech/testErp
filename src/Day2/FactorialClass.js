import React, { Component } from 'react'

export default class FactorialClass extends Component {
  showFact(){
    let n = this.props.num;
    let fact =1;
    for(let i = 1;i<=n;i++){
        fact = fact * i;
    }
    return fact;
  }
    render() {
    return (
      <p>Factorial of {this.props.num} = {this.showFact()}</p>
    )
  }
}
