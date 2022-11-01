let a=[1,2,3,4,56,-1]

function num(item){
    return item>0;
}
let b=a.every(num)
console.log(b)
let numb=[1,2,3,45,]
console.log(numb.every(Array.isArray(numb)))