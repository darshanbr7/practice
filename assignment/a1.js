// program to  perform capitalize every word in the sentance
function capitalize(sentence){
    let array=sentence.split(" ")
    let emparr=[]
    for (data of array){
        let sep=data.substring(0,1)
        let cap=sep.toUpperCase()
        let fin=data.substring(1)
         emparr.push(cap+fin)
         }
         return emparr.join(" ")

}
console.log(capitalize("  hdyd dnaud idniahi iiah"))