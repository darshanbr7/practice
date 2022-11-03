// capitalize every word
function capitalize(sentsnce){
    let convert=sentsnce.split(" ") // this method used to convert string to array
    let emparr=[] //  creating empty array
    for( data of convert){
         let sep=data.substring(0,1) // separating every word's first letter
         let cap=sep.toUpperCase() // converting first letter into upper case
         let rem=data.substring(1) // fectching reming element from the element
         emparr.push(cap+rem) // joining every elemet after capitalization and pushing to array
    }
    return emparr.join(" ")//coverting array to string

}
console.log(capitalize("hello everyone"))