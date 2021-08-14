// WHILE enquanto
// contador de 1 a 10
let contador = 1
while (contador<=10) {
    console.log(contador)
    contador++
}

let op=0, max=10, min=-1, cont=0
while (op != -1){
    op = Math.floor(Math.random()*(max-min)+min)
    console.log(`a operação escolhida foi ${op}`)
    cont++
}
console.log(`a quantidade de repetições foi de: ${cont - 1}`)

//preenchendo um vetor
let w = [], dw = [], i=0  

while(i < 10 ){ //preenchendo com apenas o while
    w.push(i)
    i++
}
i=0
while(i < 10) { //mostrando o vetor preenchido
    console.log(w[i])
    i++
}


// DO WILHE faça enquanto

//preenchendo um vetor
let w = [], dw = [], i=0  

do{ //preenchendo com do while
    dw.push(i)
    i++
} while(i < 10 )
i=0
do{ //mostrando o vetor preenchido 
    console.log(dw[i])
    i++
}while(i < 10)



// FOR para

for (i=0; i<=10; i++){ //escopo global, entende como var automaticamento: (var i=0; i<=10; i++)
    console.log(i)
}
console.log(`valor final de i: ${i}`)




for (let i=0; i<=10; i++){ //escopo local
    console.log(i)
}
console.log(`valor final de i: ${i}`) //não vai funcional



let notas = [3.6, 7.4, 8.0, 9.3]
for (i=0; i< notas.length; i++){
    console.log(typeof i)
    console.log(`nota ${i+1}: ${notas[i]}`)
}



let notas = [3.6, 7.4, 8.0, 9.3]
for (i in notas){ 
    console.log(typeof i) //obs: transforma um valor number em string
    console.log(`Nota ${i+1}: ${notas[i]}`)
}


//object
const pessoa = {
    nome: 'dexter',
    sobrenome: 'coisa',
    idade: 23,
    altura: 1.5
}
for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}