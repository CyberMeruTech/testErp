import React, { Component } from 'react'

export default class CommentEntry extends Component {
    textcontent=""
  render() {
    return (
      <div>
        <h3>Enter Your Comment</h3>
        <textarea rows={5} cols={30} onBlur={(e)=>{this.textcontent=e.target.value}}></textarea>
        <br />
        <input type='button' value="Submit Comment" onClick={()=>{
                this.props.add(this.textcontent)
                this.props.handleFlag()
        }} />
      </div>
    )
  }
}
