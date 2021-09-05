// função This e Bind
const NPC = {
    saudacao: 'olá aventureiro!!!',
    oi() {
        console.log(this.saudacao)
    }
}

NPC.oi()

let oi2 = NPC.oi
oi2()

let oi3 = NPC.oi.bind(NPC)
oi3()

//------------------

function Tempo(){
    this.contador = 0 
    setInterval(function(){
        this.contador++
        console.log(this.contador)
    }, 1000)
}

new Tempo
//------------------

function Tempo(){
    this.contador = 0 
    setInterval(function(){
        this.contador++
        console.log(this.contador)
    }.bind(this), 1000)
}

new Tempo
//------------------
function Tempo(){
    this.contador = 0 
    const self = this
    let teste = setInterval(function(){
        self.contador++
        console.log(self.contador)
        if (self.contador == 10){
            clearInterval(teste)
        }
    }, 1000)
}

new Tempo()

//------------------

// Arrow 

let soma = function(a){
    return 2+a
}
console.log(soma(2))

// função Arrow 

somaArrow = (a) => {
    return 2+a
}
console.log(somaArrow(2))

//sem parametro
hello = () => 'hello world'
hello = _ => 'hello world'



function Tempo(){
    this.contador = 0 
    setInterval(() => {
        this.contador++
        console.log(this.contador)
    }, 1000)
}


new Tempo

// funcao anonima

soma = (x,y) => {return x + y}
sub = (x,y) => {return x - y}

resultado = (a, b, operacao = sub) =>{
    console.log(operacao(a,b))
}

resultado(1,1)
resultado(1,1, soma)
resultado(2,3, (x,y) => x*y)