import React from 'react'
import TableC from './TableC'

export default function Data1() {
    let arr = [{ename: "Vaibhav", esurname:"Wadkar" , eid:"001", salary:"100000",dept:"IT"},{ename: "Atharav", esurname:"Kulkarni" , eid:"002", salary:"100000",dept:"Quality"},{ename: "Ankita", esurname:"Kulkarni" , eid:"003", salary:"100000",dept:"Quality"},{ename: "Rohini", esurname:"Khonde" , eid:"004", salary:"100000",dept:"Quality"},{ename: "Pranjali", esurname:"Mahajan" , eid:"005", salary:"100000",dept:"IT"}]
  return (
    <>
        <h1>People of Quality Dept:</h1>
        <TableC jsonArr={arr}></TableC>
    </>
    
  )
}
