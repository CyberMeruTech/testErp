import React, { useState } from 'react'
import Hi from './Hi';

export default function ConditionalRenderEx() {
  let [flag , setFlag] = useState(false);
  function handler(e){
    setFlag(e.target.checked)
  }
    return (
    <div>
        <input type='checkbox' onChange={handler} />
        {/*flag ? <Hi></Hi>:""*/}
        {flag && <Hi></Hi>}
    </div>
  )
}
