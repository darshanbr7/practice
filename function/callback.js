// while invoking a fucnction ,passing the function as an arguement callback function

let calbac=(a,b, calback)=>{
    return calback(a,b)
    
}
 let r1=calbac( 40,40,(a,b)=>{
    return a+b
 })
 console.log(r1)          