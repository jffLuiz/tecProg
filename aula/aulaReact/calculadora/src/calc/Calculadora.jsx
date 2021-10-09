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
        console.log("Limpar")
    }

    setOperacao(op){
        console.log(op)
    }

    addDigito(dig){
        console.log(dig)
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
                    <Botao label="x" click={setOperacao}  operacao/>
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