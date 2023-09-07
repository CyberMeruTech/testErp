import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Insert({arr}) {
    let navigate = useNavigate()
  return (
    <div>
        <h2>Insert</h2>
        <div style={{margin:"20px"}}>
            <input type='text' onBlur={(e)=>{arr.push(e.target.value) 
                navigate("/getall") }} />
        </div>
    </div>
  )
}
