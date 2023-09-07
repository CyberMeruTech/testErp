import React from 'react'
import './mycss.css'

export default function DivideAndConquer({userInput}) {

    let halfLenth = Math.ceil(userInput.length/2);
    let fisrtHalf = userInput.slice(0,halfLenth);
    let secondHalf = userInput.slice(halfLenth);

  return (
    <>
        <h2>Divide And Conquer</h2>
        <div className='bordered-box'>
            <p>{fisrtHalf}Vaibhav{secondHalf}</p>
        </div>
        
    </>
  )
}
