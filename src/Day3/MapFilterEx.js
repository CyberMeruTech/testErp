// let arr = [{p1:1,p2:"hi"},{p1:2,p2:"hello"},{p1:1,p2:"howd"}];

// let returnval = arr.filter((e)=>{
//     return e.p2.length <5
// }).map((n)=>{return n.p2});

// console.log(returnval);


let arr = [{ename: "Vaibhav", esurname:"Wadkar" , eid:"001", salary:"100000",dept:"IT"},{ename: "Atharav", esurname:"Kulkarni" , eid:"002", salary:"100000",dept:"Quality"},{ename: "Ankita", esurname:"Kulkarni" , eid:"003", salary:"100000",dept:"Quality"},{ename: "Rohini", esurname:"Khonde" , eid:"004", salary:"100000",dept:"Quality"},{ename: "Pranjali", esurname:"Mahajan" , eid:"005", salary:"100000",dept:"IT"}];

let retnval=  arr.filter((n)=>{
    return n.dept === "Quality"
 }).map((e)=>{return e.ename}) ;

 console.log(retnval);

