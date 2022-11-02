// property to find the length of a string
let a="bengalure"
console.log(a.length)

//property to find the character at 
console.log(a.charAt(0))

// also alternative method to find a character
console.log(a[1])

// to find the index of a character
console.log(a.indexOf("a"))

// to find the last index of word
console.log(a.lastIndexOf("e"))

//substr()
// in this property  if we want to separate the character
let d="darshanbolare"

console.log(d.substr(4,6))
// in this method we can crop from which index to upto which index not inclue that index
console.log(d.substring(5))
// slice method is same as the substring() method
console.log(d.slice(5))

// include method
// in this method used to check the variable is present or not
// output will be in the form of boolean
console.log(d.includes("a"))

//string concatination
// it is used to join the two strings
console.log(a.concat(  d))

// another method to concat strinng
let c=a+d
console.log(c)
console.log(a+" "+d)
