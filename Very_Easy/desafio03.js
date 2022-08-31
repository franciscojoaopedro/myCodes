const listArry=(...data)=>{
    let listReverse=[]
    for(let i=0;i<data.length;i++){
        listReverse[i]=data[data.length-1-i]
    }
    
    return listReverse

}
console.log(listArry('francisco','ngunga','pedro'))