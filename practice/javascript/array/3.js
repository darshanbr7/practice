a=["mango","orange","banana","kiwi"]

// array into string method
c=a.toString(",")
console.log(typeof c)
console.log(c)

b=["appale","orange","mango","grapes"]
d=b.join(',')// another method to convert array to strings
console.log(typeof d)
console.log()
console.log(d)

// shift method
// it removes first element of the array and it takes separately 

f=a.shift()
console.log(f)

// unshift
// is used to add element at the first
g=a.unshift("gray")
console.log(a) 

// array length find using length property
console.log(a.length)

// delete property
h=delete a[0]
console.log(h)
console.log(a)


// slice method
i=a.slice(2)
console.log(i)
console.log(a)
i=a.slice(3)
i=a.slice(2,3)
console.log(i)
console.log(a)

//sort method
// it is used to set a alphabetical order
console.log(a.sort())

//
x=[1,2,3,4,5]
console.log(typeof x)
// array is defaultyly shown as a object
// if we check conformaly we use a method (Array.isArray(variable name))
console.log(Array.isArray(x))
a=["name","$raju","*abhi","anu",5,10,]
console.log(a.sort())