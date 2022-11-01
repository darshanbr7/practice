// creation of array
// array is created in sqare braces
let a=[]
// basic CRUD opreation on array
// how to insert element into array
a.push("name")
console.log(a)

a.push("no")
a.push ("ph no")
console.log(a)

// to find the length of the array using (Array.length) property
 console.log(a.length)


// printing array elememt in traditional way--
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

// accessing array element in iteration way it is also same is he while loop and do while loop
 for(i=0;i<=a.length-1;i++){
    console.log(a[i])
 }

 // using for (of){} method
 // for (of)  method is best method for array
 //syntax( element  of array name){
    // console.log(element)
// } 
 for(element of a){
    console.log(element)
 }
