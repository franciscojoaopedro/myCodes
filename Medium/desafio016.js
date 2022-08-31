const decipher=(str,key)=>{
    const charsArray=str.split()
    const normalizeKey=key%26

    const codesArray=charsArray.map((char)=>{
        const cureentCode=char.charCodeAt(0)
        if(cureentCode>= 65 && cureentCode <=90 && cureentCode-normalizeKey<65 ){
            return cureentCode+26
        }
        if(cureentCode>= 96 && cureentCode <=122 && cureentCode-normalizeKey<96 ){
            return cureentCode+26
        }
       return cureentCode
    })
    return codesArray.map(code=>String.fromCharCode(code-normalizeKey)).join()
}
console.log(decipher('Vguvg',2))
console.log(decipher('Qaiik',2))
console.log(decipher('Amozmlw',2))
