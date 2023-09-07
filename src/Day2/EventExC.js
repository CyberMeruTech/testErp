import React, { Component } from "react";

export default class EventExC extends Component {
  constructor(){
    super();
    this.str = ""
    this.handler2 = this.handler2.bind(this); //to use this str we can bind function like this or can use arrow function like we use in handler2
  }

  //arrow function for binding
  handler=(event)=> {
    let whichbtn= event.target.value
    if(whichbtn==="Uppercase"){
        console.log(this.str.toUpperCase());
    }
    else{
        console.log(this.str.toLowerCase());
    }
    
  }
  handler2(event){
    this.str = event.target.value
  }
  render() {
    return (
        <>
            <input type="text" onBlur={this.handler2}/>
            <input type="button" value="Uppercase" onClick={this.handler} />
            <input type="button" value="Lowercase" onClick={this.handler} />
        </>
    
    );
  }
}
