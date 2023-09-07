let obj1 = {unm:"abc",password:"1234"}
// let obj2 = obj1 //this is not a copy one object is refered by 2 variables
 let obj2 = {...obj1,role:"guest"} //using spread operator we coppied obj1 in to obj2

 obj1.unm = "abc"
 console.log(obj1);
 console.log(obj2);
