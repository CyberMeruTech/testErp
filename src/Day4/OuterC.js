import React, { useState } from 'react'
import AddNewUser from './AddNewUser'
import Login from './Login';

export default function OuterC() {
    let [users ,setUsers] = useState([]);
    function getList() {
       let newarr = users.map((n, i) => {
          return <tr key={i}><td >{n.uname}</td><td>{n.password}</td></tr>;
        })
        return newarr;
    
    }
    function handleAddUser(user) {
        users.push(user)
        //console.log(users.map((e)=>{ return e}));
        setUsers([...users]);
      };
    
    return (
    <div>
        <AddNewUser addNewu={handleAddUser}></AddNewUser>
        <table>
            <thead>
               <tr>
                  
                        <th>UserName</th>
                        <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {getList()}
            </tbody>
        </table>
        <Login usersArr={users}></Login>
    </div>
  )
}
