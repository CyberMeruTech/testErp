import React, { useState } from 'react'

export default function ListRenderEx() {
    let [arr] = useState([]);
    let [li , setItem] = useState([]);
    function handler(e){
        arr.push(e.target.value)
        setItem(
            arr.map((ele , index)=>{
                return <li key={index}>{ele}</li>
            })
        )
    }

  return (
    <div>
        <h4>List Render Ex</h4>
        <input type='text' onBlur={handler} />
        <br />
        <ol>
            {li}
        </ol>
    </div>
  )
}
