import React from "react";
import "./icard.css"

export default function Icard(props) {
  return (
    <div>
      <div className="icard">
        <div className="id">ID: {props.id}</div>
        <div className="name">{props.firstnm}</div>
        <div className="department">Department: {props.department}</div>
      </div>
    </div>
  );
}
