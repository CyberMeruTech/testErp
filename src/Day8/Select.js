import React from 'react'
import { Link } from 'react-router-dom'

export default function Select({arr}) {
  return (
    <div>
        <ol>
            {arr.map((e,indx)=>{return <li key={indx}>{e} <Link to={`/update/${indx}`}>update</Link><Link to={`/delete/${indx}`}>delete</Link></li> })}
        </ol>
    </div>
  )
}
