import React from 'react'

export default function PropsDemo({n1,n2,program,rect:rectangle,obj,numarr,fun}) {
  return (
    <>
        <h1>Sum of numbers</h1>
        <p>Sum of {n1} and {n2} = {n1 + n2}</p>
        <p>Today is a {program.toUpperCase()}</p>
        <p>Area of rectangle: {rectangle.height * rectangle.width}</p>
        {obj.showDetails()}
        <p>{numarr.map((n)=>{return n*n})}</p>
        {fun(7)}
    </>
  )
}
export class Course{
    constructor(n,d,u){
        this.courseName = n;
        this.courseDuration = d;
        this.durationUnit = u;
    }
    setCourseDuratio(d){
        this.courseDuration = d;
    }
    showDetails(){
        console.log(this.courseName+" class will ends in "+this.courseDuration+" "+this.durationUnit)
    }
}
