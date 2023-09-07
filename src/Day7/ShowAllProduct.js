import axios from "axios";
import React, { useState } from "react";

export default function ShowAllProduct() {
  let [arr, setArr] = useState([]);
  function handler() {
    let promise = axios.get("http://localhost:8080/crud/showall");
    promise.then((res) => {
      console.log("hurrey the promise resolved", res.data);
      setArr(res.data);
    });
    promise.catch(() => {
      console.log("the promise is rejected");
    });
  }
  return (
    <div>
      <>
        <button onClick={handler}>Get Data</button>
        {arr.map((eachp) => {
          return (
            <div className="icard">
              <div className="id">ID: {eachp.id}</div>
              <div style={{ textAlign: "center" }}>
                <div className="name">{eachp.pName}</div>
              </div>
              <div className="department">Price: {eachp.price}</div>
            </div>
          );
        })}
      </>
    </div>
  );
}
