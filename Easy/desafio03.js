const checkBalance=(str)=>{
    const charCount={}
    for(let i=0;i<str.length;i++){
        charCount[str[i]]=charCount[str[i]]?charCount[str[i]]+1:1
    }
    const everAll=(count,index,array)=>(index!==0?count===array[index-1]:true)
    return Object.values(charCount).every(everAll)
}
console.log(checkBalance('This is Thee'))
console.log(checkBalance('ssd'))
console.log(checkBalance('Lore,ispsum'))
