import React, { useState } from 'react'

export default function ShowWhatIType() {
    let [value, setValue] = useState("THE TEXT WILL COME HERE");
    function handler(e){
        //value = (e.target.value) //never set a state varibale like this
        setValue(e.target.value) //calling the setter - renrender happens
     
    }
  return (
    <>
        <input type='text' onInput={handler} />
        <p>{value}</p> {/*printing the state veriable */}
    </>
    
  )
}
