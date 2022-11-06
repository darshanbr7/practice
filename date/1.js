/*var date=new Date();  
var day=date.getDate();  // it returns the date
var month=date.getMonth()+1;  // i return the current month
var year=date.getFullYear(); // 
//console.log(date+""+ day+" "+month+' '+year) 
console.log(day)
console.log(month)
console.log(year)*/
let day= new Date()
console.log(day) // it returns the date
//let month=day.getMonth()//it returns the previous month thats why we use +1 
//console.log(month)
let month=day.getMonth()+1
console.log(month)  // this method returns the current month

let year=day.getFullYear()
console.log(year)// this method performs the current year

let hr=day.getHours()
console.log(hr)

let min=day.getMinutes()
console.log(min)

let  sec=day.getSeconds()
console.log(sec)

let tmz=day.getTime()
console.log(tmz)

let tms=day.getTimezoneOffset()
console.log(tms)