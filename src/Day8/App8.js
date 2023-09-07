import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Insert from "./Insert";
import Update from "./Update";
import Delete from "./Delete";
import Select from "./Select";

export default function App8() {
    let [arr,setArr] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="insert" element={<Insert arr={arr}></Insert>}></Route>
          <Route path="getall" element={<Select arr={arr}></Select>}></Route>
          <Route path="update/:index" element={<Update arr={arr}></Update>}></Route>
          <Route path="delete/:index" element={<Delete arr={arr}></Delete>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
