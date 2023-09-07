import React, { useRef, useState } from "react";
import axios from "axios";
import "../Day5/icard.css"

export default function APIConnect() {
    let[arr,setArr] = useState([])
    let[name,setName] = useState(" ")
    let[job,setJob] = useState(" ")
    let[id,setId] = useState(" ")
    let idv= useRef()
    let[value,setValue] = useState(" ")
  function handler() {
    let promise = axios.get("https://reqres.in/api/users?page=2");
    promise.then((res) => {
      console.log("hurrey the promise resolved", res.data.data[0]);
      setArr(res.data.data);
    });
    promise.catch(() => {
      console.log("the promise is rejected");
    });
  }
  function postHandler(){
    let url = "https://reqres.in/api/users";
    let data = {name:name , job:job}
    axios.post(url , data).then((res)=>{
        console.log("response=" , res)
        setId(res.data.id)
    })
  }
  function searchHandler(){
    let promise = axios.get(`https://reqres.in/api/users/${idv.current.value}`);
    promise.then((res) => {
        console.log("hurrey the promise resolved", res.data.data);
        setValue(<div className="icard">
        <div className="id">ID: {res.data.data.id}</div>
        <div style={{textAlign:"center"}}>
        <img src={res.data.data.avatar}></img>
        <div className="name">{res.data.data.first_name} {res.data.data.last_name}</div>
        </div>
        <div className="department">Email: {res.data.data.email}</div>
        
      </div>)
    });
    promise.catch(() => {
        console.log("the promise is rejected");
      });
  }
  return (
    <div>
      <>
        <button onClick={handler}>Get Data</button>
        {
        arr.map((eachemp)=>{ return (<div className="icard">
             <div className="id">ID: {eachemp.id}</div>
             <div style={{textAlign:"center"}}>
             <img src={eachemp.avatar}></img>
             <div className="name">{eachemp.first_name} {eachemp.last_name}</div>
             </div>
             <div className="department">Email: {eachemp.email}</div>
             
           </div>)
        }) }

        <div style={{border:"solid black 1px" , padding:"20px"}}>
           Name: <input type="text" onBlur={(e)=>{setName(e.target.value)}}/>
           <br></br>
           job: <input type="text" onBlur={(e)=>{setJob(e.target.value)}}/>
           <br></br>
           <br></br>
           <input type="button" onClick={postHandler} value="Send Data"/>
           <p>{name} your id is: {id} </p>

        </div>
        <div style={{border:"solid black 1px" , padding:"20px",margin:"10px"}}>
            Id: <input type="text" ref={idv}/>
            <input type="button" onClick={searchHandler} value="Search"/>
        </div>
        <div>{value}</div>
       
      </>
    </div>
  );
}
