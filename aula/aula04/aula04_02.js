// criar uma função literal
function nome(){ //sem receber parametro

}

function nome1(params){ //recebendo parametro
    return params //retornando parametro
}
console.log(nome1("parametro"))

// armazenar em uma variavel 
const funcao = function nome2(a,b) {return a + b}
let soma=funcao(1,2)
console.log(soma)

//armazenar em vetor (array)
let vetor1=[function mult(a,b){return a*b}, funcao, nome1]
console.log(vetor1[0](2,3), vetor1[1](10,20), vetor1[2]("parametro novo"))

//armazenar em objeto
let obj={} //criar objeto sem atributo
obj.oi= function ola() {return "Olá DSM"}
console.log(obj.oi())

// funcao dentro de outra funcao
function soma1(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma1(2,3)(4)
let exemplo = soma1(2,3)
exemplo(4)


//retorno ou não
function rect(base,altura){
    let area = base*altura
    if (area>10){
        console.log(`valor acima de 10: ${area}`)
    } else {
        return area
    }
}
console.log(rect(2,2))
console.log(rect(2))
console.log(rect(2,3,5)) //desconsidera o ultimo valor
console.log(rect(4,4))



// funcao sem params
function sub(){
    let sub=0
    for (i in arguments){
        sub-=arguments[i]
    }
    return sub
}
console.log(sub(1))
console.log(sub(1,2))
console.log(sub(1,2,5))
console.log(sub(1,2,5,-8))

//---------------------------------

function soma2(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}
console.log(soma2(), soma2(3), soma2(5,2,3), soma2(0,0,0))

function soma3(a,b,c){
    a = 1 in arguments ? a : 1
    b = b !== undefined ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}
console.log(soma3(), soma3(3), soma3(5,2,3), soma3(0,0,0))


// ecma2015 -- ecma2021
function soma4(a=1,b=1,c=1){
    return a+b+c
}
console.log(soma4(), soma4(3), soma4(5,2,3), soma4(0,0,0))

//Faça uma função que receba dois numeros inteiros e positivos por parametro ... retorne a soma dos N numeros inteiros extentes entre eles
// resolução professor
let somaN = function (inicial, final){
    let soma=0
    for (i=inicial+1; i<final; i++){
        soma+=i
    }
    return soma
}
console.log(somaN(1,5))

// faça uma função que leia cinco valores, determine e mostre o maior e o menor entre eles

function maiorMenor(a,b,c,d,e){
    menor=Math.min(a,b,c,d,e)
    maior=Math.max(a,b,c,d,e)
    return console.log(`menor: ${menor} e maior: ${maior}`)
}
maiorMenor(11,55,1554,10,22)
