import React, { useState } from 'react'

export default function AddF() {
    let num1=0;
    let num2=0;
    let [result, setResult] = useState();

    function handler(){
        setResult(parseInt(num1)+ parseInt(num2));
    }
  return (
    <>
        First Number: <input type="text" onBlur={(e) => {num1=e.target.value}} />
        <br />
        Second Number: <input type="text" onBlur={(e) => {num2=e.target.value}} />
        <br />
        <input type="button" value="Add" onClick={handler}/>
        <br />
        <p>Result: {result} </p>
      </>
  )
}
