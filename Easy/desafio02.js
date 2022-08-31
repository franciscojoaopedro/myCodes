const organizarNomes=(fullName)=>{
    const nome=fullName.split(' ')
    let initials=''
    for(let i=0;i<nome.length;i++){
        initials+= ` ${nome[i][0].toUpperCase()}.`
    }
    const nomeAutor=`${nome[nome.length -1].toUpperCase()},${initials}`
    return nomeAutor
}

console.log(organizarNomes('Francisco Joao Pedro'))
console.log(organizarNomes('Augusto Carlos'))
