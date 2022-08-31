const factorialNumber=(bigInt)=>{
    const number=BigInt(bigInt)
    if(number===0n)return 1n
    const fac= number* factorialNumber(number-1n)
    return (fac)
}
console.log(factorialNumber(10))
console.log(factorialNumber(5))
console.log(factorialNumber(320))
console.log(factorialNumber(0))
