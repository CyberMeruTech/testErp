import React from 'react'
import './mycss.css'

export default function Reverse(prop) {
    let reverseStr=""
    function rev(){
        reverseStr = prop.userInput.split('').reverse().join('');
        return reverseStr;
    }
  return (
    <>
        <h2>Reverse</h2>
        <div className='bordered-box'>      
            <p>{rev()}</p>
        </div>  
    </>
  )
}
