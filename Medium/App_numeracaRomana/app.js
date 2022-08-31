const inputNumberRoman=document.querySelector('.numberRoman');
const btnConverter=document.querySelector('.btn-convert');
const htmlResultadoH4=document.querySelector('.resultado') 
const romaDecinalMap={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'i':1,
        'v':5,
        'x':10,
        'l':50,
        'c':100,
        'd':500,
        'm':1000,
    }
const App=()=>{
const sumNumeroRom=(acum,current,index,array)=>(constisNumberRom=current<array[index+1]?acum-current:acum+current);
let numeroEmRomano=''
const newLinguagem= async(str)=>{
        if(str==='')return;
        const numberArray=await str.split('')
        const decimalArray=await numberArray.map((numero)=>romaDecinalMap[numero])
        const resultado=decimalArray.reduceRight(sumNumeroRom)
        numeroEmRomano= await resultado
        return resultado
    }
    const renderData=async (event)=> {
    const data=inputNumberRoman.value;
        await newLinguagem(data)
        event.preventDefault()
        htmlResultadoH4.textContent=`${numeroEmRomano}`;
    }
        

btnConverter.addEventListener('click',renderData)
  
}
App()

