// Um supermercado deseja reajustar os preços usando o seguinte critério o produto poderá ter seu preço aumentado ou diminuido. Para o preço ser alterado, o produto deve preencher pelo menos um dos requisistos a seguir
// Venda média    |  preço atual        |  % aumento    | % dimunuição

//    <500             <R$30.00                10%              -

// >=500 E < 1200   >=R$30.00 E <R$80.00       15%              -

//    >=1200          >=R$80.00                -              20%


//primeira resolução (confirmação dupla de volume e preço)
var venda=10 , preco=10

if (venda<500){
    if (preco<30){
        preco=preco*1.1
    }
}else if (venda>=500 && venda<1200){
    if (preco>=30 && preco<80){
        preco=preco*1.15
    }
}else if (venda>=1200){
    if (preco>=80){
        preco=preco*0.8
    }
}
console.log(preco.toFixed(2))


//segunda resolução (confirmação simples de volume ou preço)
var venda=499 , preco=100

if (venda<500 || preco<30){
        preco=preco*1.1
}else if ((venda>=500 && venda<1200) || (preco>=30 && preco<80)){
        preco=preco*1.15
}else if (venda>=1200 || preco>=80 ){
        preco=preco*0.8
}
console.log(preco.toFixed(2))


//resolução do professor (parecido com a segunda resolução)
let venda = 250
let preco = 36
let novoPreco

if ((venda<500) || (preco<30)){
    novoPreco=(preco*10/100)+preco
}else if ((venda>=500 && venda<1200) || (preco>=30 && preco<80)){
    novoPreco=(preco*15/100)+preco
}else if (venda>=1200 || preco>=80 ){
    novoPreco=preco-(preco*20/100)
}
console.log(novoPreco)