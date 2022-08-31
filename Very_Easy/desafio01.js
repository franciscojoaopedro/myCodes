const soma=(...argumenst)=>{
    const soma=argumenst.reduce((acomulador,value,)=>acomulador+ value,0)
    const media=soma/argumenst.length
    console.log(media)
}
soma(1,2,4,5,5);