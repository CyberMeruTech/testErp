import React from 'react'
import FindSquare from './FindSquare'
import PropsDemo, { Course } from './PropsDemo'
import FactorialClass from './FactorialClass'
import EventExC from './EventExC'
import Data1 from './Data1'

export default function App2() {
    let str = "Yogadivas"
    let jsonobj = {height:25 , width:22}
    let num1 = 12 , num2=23
    let course = new Course("react",8,"days");
    let arr = [2,25,22,23,12];

    function sayHi(times){
        for(let i = 1 ;i<=times;i++ ){
            console.log("Hiii✋..!");
        }
    }

  return (
    <>
        <FindSquare num="4" power="3"></FindSquare>
        <FindSquare num="2" power="2"></FindSquare>
        <PropsDemo fun={sayHi} program={str} rect = {jsonobj} n1={num1} n2={num2} obj={course} numarr={arr}></PropsDemo>
        <FactorialClass num={7}></FactorialClass>
        <EventExC></EventExC>
        
    </>
    
  )
}
