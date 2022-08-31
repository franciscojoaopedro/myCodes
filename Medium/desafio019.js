const multiplicativoPersintence=(number)=>{
    if(number<10){return 0};
    const digites=number.toString().split('');

    const product=digites.reduce((accum,current)=>accum*current,1)
    console.log('multiplicando',digites)
    return 1 + multiplicativoPersintence(product)
}

console.log(multiplicativoPersintence(999))
console.log(multiplicativoPersintence(574))
console.log(multiplicativoPersintence(785))