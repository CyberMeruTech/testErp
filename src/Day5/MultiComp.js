import React from 'react'
import Icard from './Icard'

export default function MultiComp() {
    let emp = [
        {empid:1 , ename:"Vaibhav" , Dept:"It"},
        {empid:2 , ename:"Athrava" , Dept:"It"},
        {empid:3 , ename:"Ankita" , Dept:"Sales"},
        {empid:4 , ename:"Pranjali" , Dept:"Hr"},
        {empid:5 , ename:"Rohini" , Dept:"Sales"},
    ]
  return (
    <div>
        {
            emp.map((eachemp)=>{
               return <Icard key={eachemp.empid} id = {eachemp.empid} firstnm={eachemp.ename} department={eachemp.Dept}></Icard>
            })
        }
    </div>
  )
}
