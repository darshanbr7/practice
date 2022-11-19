// function inside a function are called callback function

let calbac=(a,b, calback)=>{
    return calback(a,b)
    
}
 let r1=calbac( 40,40,(a,b)=>{
    return a+b
 })
 console.log(r1)