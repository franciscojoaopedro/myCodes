const arganizarArray=(arguments)=>{
    const listNumber=[]
    arguments.forEach((lista)=>{
        listNumber.push(...arguments)
    })
    return listNumber
}
console.log(arganizarArray([1,5,7],[2,3,5],[8,3,5,7]))