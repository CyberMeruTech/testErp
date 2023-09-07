import React, { Component } from 'react'
import CommentEntry from './CommentEntry';

export default class Outerbox extends Component {
  constructor()
  {
    super();
    this.state = {flag:false,comments:[] , li:[]}
  }
  handler =()=>{
    //this.setState({flag:!this.state.flag})
    this.setState({flag:true})
  }
  flagHandler=()=>{
    this.setState({flag:false})
  }
  addToArray=(comment)=>{
   let arr= this.state.comments;
   arr.push(comment)
   let newArry = arr.map((e,i)=>{
    return <li key={i}>{e}</li>
    })

   this.setState({comments:arr , 
    li: newArry
    })

  }
    render() {
    return (
      <div>
        <div>
            <p>This is the blog on conditional rendering</p>
            <p>This is the blog on conditional rendering</p>
            <p>This is the blog on conditional rendering</p>
            <p>This is the blog on conditional rendering</p>
            <p>This is the blog on conditional rendering</p>
            <p>This is the blog on conditional rendering</p>
        </div>
        <button onClick={this.handler}>Toggle Comment Box</button>
        {this.state.flag && <CommentEntry add = {this.addToArray} handleFlag={this.flagHandler}></CommentEntry>}
        <ol>
            {this.state.li}
        </ol>
      </div>
    )
  }
}
