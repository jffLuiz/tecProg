let num = 3
console.log(typeof num)

let div = num/0

console.log(div)
console.log("10"/2) //a linguagem tranforma a string em int

//formas de concatenar
console.log("concatenar com + : 3"+num)
console.log("concatenar com , : 3",num)
console.log("concatenar com .concat: 3".concat(num))


console.log("3"-num)

console.log("o que!?" * 2) // erro esperado

console.log(0.1+0.7) // a linguagem perde 0.00001

let soma = 0.1+0.7
if (0.8 == soma){ // demonstando o item acima
    console.log("deu certo!")
} else {
    console.log("deu errado!")
}

// funcao math
const raio = 2
const area = Math.PI * Math.pow(raio,2) //1 pi; 2-exponecial
console.log(raio)
console.log(Math.PI)
console.log(area)
console.log(typeof Math)

// funcao string
const exemplo = "test3!123"
console.log(exemplo.charAt(3)) //imprimi o caracter da posição desejada

console.log(exemplo.charCodeAt(3)) //imprime o codigo asc da posição desejada

console.log(exemplo.indexOf("3")) //imprimi o numero da posição do elemento, iniciando em 0

console.log(exemplo.substring(2)) //imprimi apenas a posição do elemento desejado em diante
console.log(exemplo.substring(0,2)) //inicio, qt de caracteres

console.log(exemplo.replace("3","e")) //troca os elementos da string
console.log(exemplo.replace(/\d/,"e")) // busca o primeiro inteiro para alterar
console.log(exemplo.replace(/\d/g,"e")) // busca todos os elemento inteiro para alterar

console.log(exemplo.replace(/\w/, "T"))// busca o primeiro caracter para alterar
console.log(exemplo.replace(/\w/g, "t"))// busca todos os caracter para alterar

// spoiler de funcao e expressoes
const up = texto=>texto.toUpperCase()
console.log(`teste.... ${up("teste")}`)




