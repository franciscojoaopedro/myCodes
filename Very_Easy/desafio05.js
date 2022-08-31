const letrasFunction=(frase)=>{
    const sortedArray=frase.toLowerCase().split('').sort();
    const letraMaior=sortedArray[sortedArray.length-1]
    return letraMaior 
}
console.log(letrasFunction('abcdz'))