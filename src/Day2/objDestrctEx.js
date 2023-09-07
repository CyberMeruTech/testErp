let obj = {day:1,month:12,year:2023}
console.log(obj.day,"-",obj.month,"-",obj.year);

//using object destructuring
console.log("using object destructuring")
let{day,month,year} = obj //here day, month, year are local veriable
console.log(day,"-",month,"-",year)

let {day:dd} = obj //here get the property day in local varibale 
console.log("dd=",dd)