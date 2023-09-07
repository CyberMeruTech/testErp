import React, { useRef } from "react";
import "./addProduct.css";
import axios from "axios";

export default function AddProduct() {
    let id= useRef(); 
    let pnm= useRef(); 
    let pprice= useRef(); 
  function postHandler() {
    let url = "http://localhost:8080/crud/add";
    let data = { id: id.current.value, pName: pnm.current.value ,price: pprice.current.value};
    axios.post(url, data).then((res) => {
      console.log("response=", res);
    });
  }
  return (
    <div className="product-form">
      <h1>Add Product</h1>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" ref={id} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={pnm} />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" ref={pprice} />
      </div>
      <button type="submit" onClick={postHandler}>Add Product</button>
    </div>
  );
}
