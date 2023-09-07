import React, { Component } from 'react'

export default class AgeOfPerson extends Component {
  showAge(){
    let bDate = this.props.userDetails.Dob;
    let date = new Date(bDate);
    let age = new Date().getFullYear() - date.getFullYear();
    let monthDiff = new Date().getMonth() - date.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < date.getDate())) {
      age--;
    }
    return age;
  }
   
    render() {
        let backgroundColor;
    if (this.props.userDetails.gender === 'Female') {
      backgroundColor = 'pink';
    } else if (this.props.userDetails.gender === 'Male') {
      backgroundColor = 'blue';
    } else {
      backgroundColor = 'yellow';
    }
    return (
        <>
            <div style={{backgroundColor , padding:"10px" , marginTop:"20px"}}>
                <p style={{color:"white"}}>{this.props.userDetails.name} your age is : {this.showAge()} </p>
            </div>
            
        </>
       
    )
  }
}
