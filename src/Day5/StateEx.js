import React, { Component } from 'react'

export default class StateEx extends Component {
  constructor(){
    super();
    this.state = {obj:{uname:"Vaibhav" , password:"12345"},arr:[]}
  }
  handler=()=>{
    //this.state.obj.uname = "Vw";
    this.setState({obj:{...this.state.obj,uname:"Vw"}})
  }
    render() {
    return (
      <div>
        <p>{this.state.obj.uname}</p>
        <button onClick={this.handler}>Click</button>
      </div>
    )
  }
}
