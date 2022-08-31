const invertWords=(word)=>word.split('').reverse().join('');
const invertString=(str)=>{
    const wordArray=str.toLowerCase().split(' ')
    const invertWord=wordArray.map(invertWords);
    return invertWord.join(' ')
}
console.log(invertString(' o pedro foi para a minha casa'))