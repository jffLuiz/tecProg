import React, {Component} from "react";
import './Calculadora.css'
import Botao from "../componentes/Botao";
import Display from "../componentes/Display";

const estadoInicial = {
    valorDisplay: '0',
    limparDisplay: false,
    operacao:null,
    valores: [0, 0],
    atual: 0
}

class Calculadora extends Component {
    
    state = {
        ...estadoInicial
    }

    limparMemoria(){
        this.setState({...estadoInicial})
    }

    setOperacao(op){
        if(this.state.atual === 0){
            this.setState({op, atual: 1, limparDisplay: true})
        } else {
            const igualdade = op === '='
            const opAtual = this.state.operacao

            const valores = [...this.state.valores]

            try {
                valores[0] = eval(`${valores[0]} ${opAtual} ${valores[1]}`)
            } catch (e) {
                valores[0] = this.state.valores[0]
            }

            valores[1] = 0

            this.setState({
                valorDisplay: valores[0],
                operacao: igualdade ? null : op,
                atual: igualdade ? 0 : 1,
                limparDisplay: !igualdade,
                valores
            })
        }
    }

    addDigito(dig){
         if (dig === '.' && this.state.valorDisplay.includes('.')){
            return
         }

         const limparDisplay = this.state.valorDisplay ==='0' || this.state.limparDisplay

         const valorAtual = limparDisplay ? '' : this.state.valorDisplay
        
         const valorDisplay = valorAtual + dig

         this.setState({valorDisplay, limparDisplay: false})

         if(dig !== '.'){
            const i = this.state.atual
            const novoValor = parseFloat(valorDisplay)
            const valores = [...this.state.valores]
            valores[i] = novoValor
            this.setState({valores})
         }
    }

    render(){

        const setOperacao = op => this.setOperacao(op)

        const addDigito = dig => this.addDigito(dig)

        return (
            <div>
                <h2>Calculadora</h2>
                <div className="calculadora">
                    <Display value={this.state.valorDisplay}/>
                    <Botao label="CE" click={ () => this.limparMemoria()} triplo />
                    <Botao label="/" click={setOperacao} operacao/>
                    <Botao label="7" click={addDigito}/>
                    <Botao label="8" click={addDigito}/>
                    <Botao label="9" click={addDigito}/>
                    <Botao label="*" click={setOperacao}  operacao/>
                    <Botao label="4" click={addDigito}/>
                    <Botao label="5" click={addDigito}/>
                    <Botao label="6" click={addDigito}/>
                    <Botao label="-"click={setOperacao}    operacao/>
                    <Botao label="1" click={addDigito}/>
                    <Botao label="2" click={addDigito}/>
                    <Botao label="3" click={addDigito}/>
                    <Botao label="+" click={setOperacao}   operacao/>
                    <Botao label="0" click={addDigito} dobro/>
                    <Botao label="." click={addDigito}/>
                    <Botao label="=" click={setOperacao} igual/>
                </div>
            </div>
            
        )
    }
}

export default Calculadora