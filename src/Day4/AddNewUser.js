import React, { useState } from 'react'

export default function AddNewUser(props) {
    let [usernm , setUserNm] = useState(" ");
    let [pass , setPass] = useState(" ");
    function handler(e){
        setUserNm(e.target.value);
    }
    function handler2(e){
        setPass(e.target.value);
    }
    function AddUser(){
        let nu = {uname:usernm , password:pass};
        props.addNewu(nu);
    }
    return (
    <div>
        <h1>Register Here..!</h1>
        UserName: <input type='text' onBlur={handler} />
        <br/>
        Password: <input type='password' onBlur={handler2} />
        <br/>
        <input type='button' value="Register" onClick={AddUser} />
        

    </div>
  )
}
