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