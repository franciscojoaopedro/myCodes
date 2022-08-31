const generateDigite=(array)=>{
    const step1=array.reduce((accum,current,index)=>{
        return index ===0 || index %2 ===0?accum+current:accum
    },0)
    const step2=step1*3;
    const step3=step2+ array.reduce((accum,current,index)=>{
        return index %2 !==0?accum+current:accum
    },0)
    return step3%10!==0?10-step3%10:0
}

const verificadorNaves=(codigo)=>{
    const numberArray=codigo.toString().split('').map(Number)
    const element=numberArray.slice(0,-1)

    const correctDigit=generateDigite(element)
    return correctDigit===numberArray[11]
}

console.log(verificadorNaves(547020743789))
console.log(verificadorNaves(447020743789))
console.log(verificadorNaves(547020743710))