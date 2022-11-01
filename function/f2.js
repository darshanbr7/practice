// function with return keyword
function sum(a,b){
console.log(a+b)
}
sum(2,4)
sum("hello ","word")

// function with defaullt value
function add(a=1,b=8){
    console.log(a+b)
}
add()
// when we did't pass any argumet it takes the default value
add(2)
// when we pass one arguemt it takes for first preference
// another value can be taken by default