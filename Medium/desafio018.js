const Equation=class{
    constructor(a=0,b=0,c=0){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    getRoots(){
        const areValueZeros=(this.a===0&& this.b===0&&this.c===0)
        const bEaIgualZero=(this.a===0&&this.b===0)
        const aIsZero=this.a===0
        if(areValueZeros){
            return 'Nenhum parametros informado'
        }
        if(bEaIgualZero){
            console.log(`1- Parametros insuficiente, nenhuma raiz`)
            return []
        }
        if(aIsZero){
            console.log(`1. ${this.b}x + ${this.c}=0`)
            console.log(`2. ${this.b}x =${this.c *-1}`)
            console.log(`3. x= ${this.c*-1} / ${this.b}`)
            console.log(`4. x= ${(this.c *-1)/ this.b}`)

            return [(this.c*-1/this.b)]
        }
        const delta=this.b**2-(4* this.a * this.c)
        if(delta<0){
            console.log('Delta é menor que zero!')
            return []
        }
        console.log(`1 delta = ${this.b}² - 4 * ${this.a} * ${this.c}`)
        console.log(`2 delta= ${delta}`);
        console.log(`3 x' = (-(${this.b})) + √${delta}/ 2* ${this.a}`);
        console.log(`4 x'' = (-(${this.b})) - √${delta}/ 2* ${this.a}`);
        console.log(`5 x' = ${this.b * -1 } + √${delta} / ${this.a * 2}`)
        console.log(`6 x'' = ${this.b * -1} - √${delta} / ${this.a * 2}`)
        const x1=(-this.b + Math.sqrt(delta))/ (2*this.a)
        const x2=(-this.b - Math.sqrt(delta)) / (2*this.a)

        


        if(Number.isInteger(Math.sqrt(delta))){
            console.log(`7 x' = ${this.b * -1 } + ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`8 x'' = ${this.b * -1} - ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`9 X1= ${x1}`)
            console.log(`10 X2= ${x2}`)
        }
        const valorX=x1===x2?[x1]:[x1,x2]
        return valorX
    }
}

const eq1=new Equation(3,2,0) //[3]
const eq2=new Equation() //[error]
const eq3=new Equation(0,0,5) //[]
const eq4=new Equation(1,-4,-5) //[5,-1]
const eq5=new Equation(2,7,5) // não sei

console.log(eq1.getRoots())
console.log(eq2.getRoots())
console.log(eq3.getRoots())
console.log(eq4.getRoots())
console.log(eq5.getRoots())


/*


const Equation=class{
    constructor(a=0,b=0,c=0){
        this.a=a;
        this.b=b;
        this.c=c;
    }

    getRoots(){
        const areValueZeros=(this.a===0&& this.b===0&&this.c===0)
        const bEaIgualZero=(this.a===0&&this.b===0)
        const aIsZero=this.a===0
        if(areValueZeros){
            return 'Nenhum parametros informado'
        }
        if(bEaIgualZero){
            console.log(`1- Parametros insuficiente, nenhuma raiz`)
            return []
        }
        if(aIsZero){
            console.log(`1. ${this.b}x + ${this.c}=0`)
            console.log(`2. ${this.b}x =${this.c *-1}`)
            console.log(`3. x= ${this.c*-1} / ${this.b}`)
            console.log(`4. x= ${(this.c *-1)/ this.b}`)

            return [(this.c*-1/this.b)]
        }
        const delta=this.b**2-(4* this.a * this.c)
        if(delta<0){
            console.log('Delta é menor que zero!')
            return []
        }
        console.log(`1 delta = ${this.b}² - 4 * ${this.a} * ${this.c}`)
        console.log(`2 delta= ${delta}`);
        console.log(`3 x' = (-(${this.b})) + √${delta}/ 2* ${this.a}`);
        console.log(`4 x'' = (-(${this.b})) - √${delta}/ 2* ${this.a}`);
        console.log(`5 x' = ${this.b * -1 } + √${delta} / ${this.a * 2}`)
        console.log(`6 x'' = ${this.b * -1} - √${delta} / ${this.a * 2}`)
        const x1=(-this.b + Math.sqrt(delta))/ (2*this.a)
        const x2=(-this.b - Math.sqrt(delta)) / (2*this.a)

        


        if(Number.isInteger(Math.sqrt(delta))){
            console.log(`7 x' = ${this.b * -1 } + ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`8 x'' = ${this.b * -1} - ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`9 X1= ${x1}`)
            console.log(`10 X2= ${x2}`)
        }
        const valorX=x1===x2?[x1]:[x1,x2]
        return valorX
    }
}

const eq1=new Equation(3,2,0) //[3]
const eq2=new Equation() //[error]
const eq3=new Equation(0,0,5) //[]
const eq4=new Equation(1,-4,-5) //[5,-1]
const eq5=new Equation(2,7,5) // não sei

console.log(eq1.getRoots())
console.log(eq2.getRoots())
console.log(eq3.getRoots())
console.log(eq4.getRoots())
console.log(eq5.getRoots())*/