const elevarNumeroQuadratico=(number)=>{
    const stringNumber=number.toString().split('')
   const squareArray= stringNumber.map((digit)=> Number(digit)**2).join('')
    return squareArray
    /*for(let i=0; i<stringNumber.length;i++){
        const pegarAlgarimos=Math.pow(Number(stringNumber[i]),2)
        result+=pegarAlgarimos.toString()

        console.log(pegarAlgarimos)
    }*/
    //convertInNUmber=Number(result)
}
console.log(elevarNumeroQuadratico(523))