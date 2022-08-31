const relatorio=(srt,toInsert,index)=>{
    const charArray=srt.split('')
    let insertCount=0;
    for(let i=0;i<=srt.length;i++){
        if(index.includes(i)){
            charArray.splice(i,insertCount,toInsert)
            insertCount++;
        }
    }
    return charArray.join('')
}

console.log(relatorio('Francisco é talatona','de',[3,5]))