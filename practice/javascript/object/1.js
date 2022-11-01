// creation of object
// creating a object using flower brocket / curly braces
a={
    name:"darshan",
    age:21,
    from:"mandya"
}
console.log(a)

// to read only keys
console.log(Object.keys(a))

// to read only values
console.log(Object.values(a))

// update a  value in object
a.age=22
console.log(a)
// another method
a['age']=23
console.log(a)

// delete the object key values
delete a.age
console.log(a)

// to add entries to object
a.village="bolare"
console.log(a)

//  inbuilt propertys 
// once freezed value can not changed
console.log(Object.freeze(a))
a.to="bengalore"
console.log(a)

// entries
console.log(Object.entries(a))