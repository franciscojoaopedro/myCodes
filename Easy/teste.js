const btnAdicionarUsuairo=document.querySelector('.btnAdicionar');
const btnLicensa=document.querySelector('.btnLicensa');
const form=document.querySelector('.form')
const inputname=document.querySelector(".nome")
const inputLastName=document.querySelector(".sobrenome")
const inputBirthDay=document.querySelector(".datanascimento")
const cardUsers=document.querySelector('.card-users')
const inputLicensa=document.querySelector('.inputLicensa')

const btnGetUser=document.querySelector('.btnGetUser')

const image=document.querySelector('.image')
let newImage=''
image.addEventListener('change',(event)=>{
    newImage=event.target.files[0].name;
})
//const userInfo=document.querySelector('.card-user')
/*
  <div class="card-user">
        </div>
*/

const Pilot =class{
    constructor(firstName,lastName,birthDay,perfilAvatar){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthDay=new Date(birthDay);
        this.flyingLicense=false;
        this.identidade=this.addIndentidade();
        this.avatar=perfilAvatar;
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
let listUser=[
]
/*
 {'nome':'Francosco','sobrenome':'Pedro','datanascimento':'10-28-1998'},
    {'nome':'Vandelson','sobrenome':'Pedro','datanascimento':'02-28-1998'},
    {'nome':'Faustino','sobrenome':'Pedro','datanascimento':'11-28-1998'},
    {'nome':'Carlos','sobrenome':'Pedro','datanascimento':'04-28-1998'},
    {'nome':'Pedro','sobrenome':'Pedro','datanascimento':'12-28-1998'},
    {'nome':'Daley','sobrenome':'Pedro','datanascimento':'10-28-1998'},
*/

const newUser=async()=>{
    const nome= await inputname.value;
    const sobrenome= await inputLastName.value
    const datanascimento= await inputBirthDay.value
    const pilot= new Pilot(nome,sobrenome,datanascimento,newImage)
    pilot.generateFlyingLicense()
    
    let user= {
        nome:pilot.firstName,
        sobrenome:pilot.lastName,
        datanascimento:pilot.birthDay,
        avatar:pilot.avatar,
        identidade:pilot.identidade,
        license:pilot.flyingLicense

    }
    console.log(pilot)
    if(listUser.includes(user)===user){
        return
    }else{
        listUser.push(user)
    }
    /*
    for(let i=0;i<listUser.length;i++){
        listUser[i]+=listUser.push(user)
    }*/
    console.log(listUser)
    console.log(image)
    await setInLocalStorage();
}
const setInLocalStorage=()=>{
   localStorage.setItem('user',JSON.stringify(listUser))
}
 const getInLocalStorage=()=>{
    const userInJson=localStorage.getItem('user');
    const listUserArray=JSON.parse(userInJson)
    return{listUserArray}
 }
/*
const createElements=()=>{
   
    return  {divNewInfo}
}
*/
const addNewInformation=user=>{
    const divNewInfo= document.createElement('div')
    const cardUser=document.createElement('div');
    cardUser.classList.add('card-user');
    divNewInfo.classList.add('info');
    cardUsers.appendChild(cardUser);
    cardUser.appendChild(divNewInfo);
    
    divNewInfo.innerHTML=`
    <div class="image">
    <img src="${user.avatar}" alt="">
    </div>
    <h3>Nome: ${user.nome}</h3>
    <p>Sobrenome: ${user.sobrenome}</p>
    <p>Data de Nascimento: ${user.datanascimento}</p>
    <p>Identidade: ${user.identidade}</p>
    <p>Licensa: ${user.license}</p>
    `;
}

const AdicionarUsuairo=(event)=>{
    event.preventDefault();
    newUser();
}
form.addEventListener('submit',AdicionarUsuairo);

btnGetUser.addEventListener('click',()=>{
    getInLocalStorage().listUserArray.forEach(addNewInformation);
})
















/*
new Pilot()
const pilot1=new Pilot('Francisco','Pedro','10-28-1998')
const pilot2=new Pilot('Carlos','Augusto','03-28-2000')
const pilot3=new Pilot('Faustino','Manuel','10-27-1998')
pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()
pilot3.generateFlyingLicense()



console.log(pilot1)
console.log(pilot2)
console.log(pilot3)


console.log(pilot1.generateFlyingLicense())*/
