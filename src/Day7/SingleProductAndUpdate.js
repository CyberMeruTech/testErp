import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'


export default function SingleProduct() {
    let idv= useRef()
    let pr= useRef()
    let[value,setValue] = useState(" ")
    function updateHandler(){
      let url =`http://localhost:8080/crud/update?i=${idv.current.value}&pr=${pr.current.value}`;
      //let data = { params: idv.current.value , pr.current.value};
      // let i = idv.current.value;
      // let p = pr.current.value; 
      axios.put(url).then((res) => {
        console.log("response=", res);
      });
    }
    function searchHandler(){
        let promise = axios.get(`http://localhost:8080/crud/show/${idv.current.value}`);
        promise.then((res) => {
            console.log("hurrey the promise resolved", res.data);
            setValue(<div className="icard">
            <div className="id">ID: {res.data.id}</div>
            <div style={{textAlign:"center"}}>
            <div className="name">{res.data.pName}</div>
            <div className="department">
                Price: Rs. : {res.data.price}
            </div>
            <br></br>
            <div>
              <input type='text' ref={pr}/> 
              <button onClick={updateHandler}>Update Price</button>
            </div>
            </div>
            
          </div>)
        });
        promise.catch(() => {
            console.log("the promise is rejected");
          });
      }
      
  return (
    <div>
        <div style={{border:"solid black 1px" , padding:"20px",margin:"10px"}}>
            Id: <input type="text" ref={idv}/>
            <input type="button" onClick={searchHandler} value="Search"/>
        </div>
        <div>{value}</div>
    </div>
  )
}
