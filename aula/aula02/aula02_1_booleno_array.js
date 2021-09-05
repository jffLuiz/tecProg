// booleana

let teste = false
console.log(teste)

teste=true
console.log(teste)
console.log(typeof teste)

teste=1
console.log(typeof teste)

console.log(!teste) // ! negando a variavel, retorna em boleando
console.log(!!teste) // !! retorna valor verdadeiro em booleano


console.log("os valores verdadeiros....")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(teste=true))


console.log("os valores falsos....")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(teste=false))


let nome
console.log(nome || "desconhecido") // operador ou ( || ) -> caso a variavel esteja vazia, é mostrado o segundo item

let nome2="jefferson"
console.log(nome2 || "desconhecido")

// ! not
// || or
// && and
// != diferente
// == igual

//Array
const valores = [7.15, 8.1, 9.6]
console.log(valores)
console.log(valores[3])
valores[3]=10
console.log(valores[3])
console.log(valores)
valores[3]=11
console.log(valores)
valores[4]="texto"
console.log(valores)
// inserir
valores.push({id: 10}, true, NaN, "D")
console.log(valores)

// remover
valores.pop() //pop remove o valor da ultima posição, 
console.log(valores)

console.log(typeof valores)

