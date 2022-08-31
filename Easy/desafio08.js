
const Pilot =class{
    constructor(firstName,lastName,birthDay){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthDay=new Date(birthDay);
        this.flyingLicense=false;
        this.identidade=this.addIndentidade();
    }

    addIndentidade(){
        const random=[]
        for(let i=0;i<=13;i++){
            let numeroGerado=(Math.random(i)*10).toFixed(0)
            random[i]=numeroGerado
        }
        const formatId= `${random.slice(0,7).join('')}-${random.length-1}`.toString()
        return formatId;
    }
    generateFlyingLicense(){
        let license=''
        for(let i=0;i<5;i++){
            license+=this.lastName[i]?this.lastName[i].toUpperCase():'9';
        }
        return(
            license +='-',
            license+= this.birthDay.getFullYear().toString()[2],
            license+= this.getBirthDayFullMonth(),
            license+=this.birthDay.getFullYear().toString()[3],
            license+='.',
            license+=this.firstName[0].toLowerCase(),
            this.flyingLicense=license
        )

    }

    getBirthDayFullMonth(){
        if(this.birthDay.getMonth()<9)return `0${this.birthDay.getMonth()+1}`
        return`${this.birthDay.getMonth()+1}`
    }
}