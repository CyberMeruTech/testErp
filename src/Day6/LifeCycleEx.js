import React, { Component } from 'react'

export default class LifeCycleEx extends Component {
    constructor(){
        super();
        this.state={time:0}
        
    }
  componentDidMount(){
    console.log("The Lifecycle component is mounted");
    this.interval = setInterval(()=>{this.setState({time:this.state.time+1})},3000)
  }
  componentDidUpdate=(prevProp,prevState)=>{
    console.log("prev time: ",prevState.time," current time: ",this.state.time)
    console.log("previously name was=" , prevProp.nm , "Current Name= ", this.props.nm)
    console.log("The Lifecycle component is updated")
  }
  componentWillUnmount(){
    console.log("The Lifecycle component is about to unmounted")
  }
  handler=()=>{
    clearInterval(this.interval)
  }
    render() {
    return (
      <div>
        <h4>Lifecycle of class component</h4>
        <button onClick={this.handler}>Stop Timer</button>
      </div>
    )
  }
}
