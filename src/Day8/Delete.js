import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Delete({arr}) {
    let {index} = useParams()
    let navigate = useNavigate()
    function handler(){
        arr.splice(index,1);
        navigate("/getall")
    }
  return (
    <div>
        <h1>Click button to delete component- {arr[index]}</h1>
        <button onClick={handler}>Delete</button>
    </div>
  )
}
