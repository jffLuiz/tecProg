soma = (x,y) => {return x + y}
sub = (x,y) => {return x - y}

resultado = (a, b, operacao = sub) =>{
    console.log(operacao(a,b))
}

resultado(1,1)
resultado(1,1, soma)
resultado(2,1, (x,y) => x*y)