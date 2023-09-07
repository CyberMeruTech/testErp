import React, { useState } from "react";

export default function Login(props) {
  let [usernm, setUserNm] = useState(" ");
  let [pass, setPass] = useState(" ");
  let [loginStatus, setLoginStatus] = useState(" ");
 // let [item, setItem] = useState([]);
  
  function checkLogin() {
    let bool = props.usersArr.find(
      (u) => u.uname === usernm && u.password === pass
    );
    if (bool) {
      setLoginStatus(`Welcome ${usernm}`);
    } else {
      setLoginStatus("Log in Failed");
    }
  }
  return (
    <div>
      <h1>Login Here..!</h1>
      UserName:{" "}
      <input
        type="text"
        onBlur={(e) => {
          setUserNm(e.target.value);
        }}
      />
      <br />
      Password:{" "}
      <input
        type="password"
        onBlur={(e) => {
          setPass(e.target.value);
        }}
      />
      <br />
      <input type="button" value="Login" onClick={checkLogin} />
      <p style={{ color: loginStatus === "Log in Failed" ? "red" : "green" }}>
        {loginStatus}
      </p>
      
    </div>
  );
}
