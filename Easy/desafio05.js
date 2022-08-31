const intervalo=(pair)=>{
    const result=[];
    for(let i=0;i<=pair[0];i++){
        for(let j=0;j<=pair[i];j++){
            result.push([i,j])
        }
    }
    return result
}
console.log(intervalo([3,2]))
console.log(intervalo([2,2]))