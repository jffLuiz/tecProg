//escreva ou print
console.log('Hello Word');
console.log("Hello Word!!!")


//variaveis
// 1 - let - variavel imutavel (não mosta endereço da memoria)
// 2 - var - variavel de livre acesso

var nome = "caneta";
console.log(typeof nome) //mostrar o tipo da variavel
console.log(nome)
nome = 3
console.log(typeof nome + " " + nome)

let idade=31;
console.log("A idade é de: " + idade)


// 3 - constante - variavel imutavel (mostra o endereço de memoria)
const num =5;
num = 5+6; //vai dar erro pq não consegue alterar
console.log(num)


//Input de informações
var usuario=prompt("qual é o seu nome? ")

