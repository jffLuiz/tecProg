// if ternario
// condição (true ou false) ? expressão1(verdade) : expressão2 (falto)

/*let cliente=true;
let idade=17
let resp = cliente ? (idade>=18 ? "R$5,00" : "R$2,50") :"R$10,00"
console.log(resp)*/

let cliente=true;
let resp = cliente ? "R$5,00" :"R$10,00"
console.log("o cliente vai pagar: " + resp)

let testePi = Math.PI > 4 ? "Sim" : "Não"
console.log(`PI é maior que 4? ${testePi}`)

// verificando se um numero é par ou impar
let num = 54
let parImpar = num%2==0 ? "Par" : "Impar"
console.log(`o numero ${num} é ${parImpar}`)
console.log(`o numero ${num} é ` + (num%2==0?"Par" : "Impar")) //sem variavel, direto no console



//Switch

let num1=10, num2=7
let op="*"

switch (op){
    case "+" :
        console.log(`${num1}+${num2}=${num1+num2}`)
        break //comando para parar o bloco
    case "-" :
        console.log(`${num1}-${num2}=${num1-num2}`)
        break
    case "*" :
        console.log(`${num1}*${num2}=${num1*num2}`)
        break 
    case "/" :
        console.log(`${num1}/${num2}=${num1/num2}`)
        break 
    default:
        console.log("Não é uma operação valida")
}

//Boss ataque
let min=1, max=5
// console.log(~~(11/5))
// console.log(11/3 >> 0)
// console.log(11/3|0)
// console.log(~~(Math.random() * 6))
let comando=Math.floor(Math.random()*(max-min)+min)
console.log(comando)
switch (comando){
    case 1: 
        console.log("atacar")
        break
    case 2: 
        console.log("defender")
        break
    case 3: 
        console.log("usar a cura")
        break
    case 4: 
        console.log("ataque supremo")
        break
    case 5: 
        console.log("correr")
        break
}

