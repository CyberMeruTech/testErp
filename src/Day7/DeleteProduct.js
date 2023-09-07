import axios from 'axios'
import React, { useRef, useState } from 'react'

export default function DeleteProduct() {
    let idv= useRef()
    let [value , setValue] = useState(" ")
    function deleteHandler(){
        axios.delete(`http://localhost:8080/crud/${idv.current.value}`).then((res)=>{
            console.log("Response= ",res)
            setValue("Deleted Successfully..!!");
        });
    }
  return (
    <div>
         <div style={{border:"solid black 1px" , padding:"20px",margin:"10px"}}>
            Id: <input type="text" ref={idv}/>
            <input type="button" onClick={deleteHandler} value="Delete"/>
        </div>
        <div style={{color:"red"}}><h3>{value}</h3></div>
    </div>
  )
}
