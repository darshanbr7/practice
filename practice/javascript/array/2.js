// array methods
// creating empty array
let a=[]

// 1. array .push
a.push("sl no")
a.push("name")
a.push(" ph no")
 console.log(a)

 // remove the last element = pop menthod
 // array.pop()
 a.pop()
 console.log(a)

 // adding element at the begining
 // array.unshift()
 a.unshift("hello")
 console.log(a)

 // removing aray element from the begining
 // array.shift()
 a.shift()
 console.log(a)
 a.reverse()
 console.log(a)
 a.sort()

 // includes (" ") method
 console.log(a.includes("name"))

 // to find the index of an array element
 console.log(a.indexOf("sl no"))

 // to find the last index of the array element

 a=[1,2,3,4,5,5,5]
 console.log(a)
 console.log(a.lastIndexOf(5))

  b=[6,8,9,10]

  // joining two array
  console.log(a+b)
  // this is the wrong way 

  // using concat method
  console.log(a.concat(b))

  // removing array element at the middle of the array
  a.splice(2,3)
  console.log(a)

  // adding at the middle of the array
  a.splice(2,0,2,2,2)
  console.log(a)

  // reverse an array
  a.reverse()
  console.log(a)
  
  // sort method
  

//let v1= a[0]
//let v2=a[2]
console.log(v1,v2)//

// es6 feature
 var[v1,v2]=a
 console.log(v1,v2)