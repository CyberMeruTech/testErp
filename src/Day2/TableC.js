import React, { Component } from 'react'

export default class TableC extends Component {
  
   
    addMatchingName(){
       let retnval=  this.props.jsonArr.filter((n)=>{
           return n.dept === "Quality"
        }).map((e)=>{return e.ename}) ;

        return retnval.toString();
    }
  
    render() {
    return (
      <p>{this.addMatchingName()}</p>
    )
  }
}
