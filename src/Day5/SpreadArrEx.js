let arr1 = ["red","black","green","blue"];
let arr2 = arr1;
arr1.push("yellow");
console.log("arr1=",arr1);
console.log("arr2=",arr2);

//using spread operator

let arr3 = ["red","black","green","blue"];
let arr4 = [...arr3]; //using spread oprator...we copy the arr3 in to arr4
arr3.push("yellow");
console.log("arr3=",arr3);
console.log("arr4=",arr4);