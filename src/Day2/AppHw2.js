import React, { Component } from 'react'
import Data1 from './Data1'
import Birthdate from './Birthdate'
import CurrencyConvertor from './CurrencyConvertor'
import AgeOfPerson from './AgeOfPerson'


export default class AppHw2 extends Component {
  constructor(){
    super();
    this.user = {name:"Vaibhav",gender:"Male" , Dob:'1999-08-02'}
    this.user1 = {name:"Manisha",gender:"Female" , Dob:'1978-05-09'}
  }
    render() {
    return (
      <>
        
        {/* <Data1></Data1> */}
        <h1>Birthdate</h1>
        <Birthdate></Birthdate>
        {/* <CurrencyConvertor></CurrencyConvertor>
        <AgeOfPerson userDetails={this.user}></AgeOfPerson>
        <AgeOfPerson userDetails={this.user1}></AgeOfPerson> */}
      </>
    )
  }
}
