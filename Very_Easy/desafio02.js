const recursaoChunks=(number)=>{
    if(number===0)return '';
    if(number===1){ return 'chunk'}
    else{return 'chunk-'+recursaoChunks(number-1)}

}
console.log(recursaoChunks(5))