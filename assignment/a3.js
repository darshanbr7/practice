// converting first letter in to  capital recived from the user
function convert(sentence){
     let convert=sentence.substr(0,1)
     let cap=convert.toUpperCase()
     let final=cap+sentence.slice(1)
     return final

}
console.log(convert("hello gm"))