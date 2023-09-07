import React from 'react'

export default function FindSquare(prop) {
  return (
        <>
            <h1>FindSquare</h1>
            <p>{prop.power} power of {prop.num} : {Math.pow(prop.num , prop.power)}</p>
        </>
  )
}
