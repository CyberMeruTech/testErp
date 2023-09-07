import React from "react";
import "./mycss.css";

export default function AllCaps(res) {
  return (
    <>
        <h2>Uppercase</h2>
      <div className="bordered-box">
        <p>{res.userInput.toUpperCase()} </p>
      </div>
    </>
  );
}
