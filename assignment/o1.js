let name={
    cl:"darshan",
    id:1001,
    phno:5050340
}/*
let clg={
    cl:"darshan",
    id:1001,
    phno:5050340,
    cll:1001
}
console.log(name.id)
// console.log(Object.create())
console.log(Object.entries(name))
console.log(Object.keys(name))
console.log(Object.values(name))
console.log(Object.assign(name))
console.log(Object.is(50,50))
console.log(Object.is(name,clg))
console.log(Object.is("cl","cl"))
console.log(Object.is(clg.id,name.id))
console.log(Object.seal(name))
console.log(Object.isSealed(name))
console.log(Object.freeze(clg))
console.log(Object.isFrozen(clg))
console.log(Object.isExtensible(name))
console.log(Object.isExtensible(clg))
console.log(Object.getPrototypeOf(clg.id))
console.log(Object.preventExtensions(clg))*/
let b={}
b=Object.assign(name)
console.log(b)
console.log(Object.entries(b))