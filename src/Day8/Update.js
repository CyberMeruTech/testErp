import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Update({arr}) {
 let {index} = useParams()
 let navigate = useNavigate()
    return (
    <div>
        <h1>Update Component {index}</h1>
        <br></br>
        <input type='text' defaultValue={arr[index]} onBlur={(e)=>{arr[index]=e.target.value
            navigate("/getall")
        }} />
    </div>
  )
}
