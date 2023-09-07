import React, { useState } from 'react'
import LifeCycleEx from './LifeCycleEx'
import LifeCycleFEx from './LifeCycleFEx'

export default function App6() {
 let [flag,setFlag] = useState(true)
 let [name,setName] = useState("Vaibhav")
 let[info,setInfo] = useState("Information");
    return (
    <div>
        <>
            <input type='text' onBlur={(e)=>{setName(e.target.value)}} />
            <input type='text' onBlur={(e)=>{setInfo(e.target.value)}} />
            UnMounting Checkbox: <input type='checkbox' onChange={(e)=>{
                if(e.target.checked)
                    setFlag(false)
                else
                    setFlag(true)
            }} />
            {flag && <LifeCycleEx nm={name}></LifeCycleEx>}
            {/* <LifeCycleFEx inf = {info} nm = {name}></LifeCycleFEx> */}
            
        </>
        
    </div>
  )
}
