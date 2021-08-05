//faça um programa em JS que receba 3 notas e 3 pesos, calcule e mostre a média ponderada entre elas

let n1=7, n2=8, n3=9, p1=1, p2=2, p3=3, media

//calculo de média ponderada
media=((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3)
//processo de saida
console.log('a média final é '+media)

if(media >= 6){
    console.log('aprovado')
}
else{
    console.log('reprovado')
}
