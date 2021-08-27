let maior, menor

function maiorMenor() {
    maior = arguments[0]
    menor = arguments[0]

    for (i in arguments){
        if (arguments[i] > maior){
            maior = arguments[i]
        }
        if (arguments[i] < menor){
            mmenor = arguments[i]
        }
    }
    
}

maiorMenor(11,55,1554,10,22)
console.log(`menor: ${menor} e maior: ${maior}`)