import React from "react"
import './Cartao.css'
import Botao from "../components/Botao"
import Cadastro from "../components/Cadastro"


const Cartao = props => {
    
    let cor = props.assentos <= 0 ? `rgb(255,0,0)` : `rgb(0,125,0)`

    let assentos = props.assentos

    let estilo = {
        backgroundColor: cor || 'gray',
        borderColor: cor || 'black',
    }    

    let botao = props.assentos <= 0 ? <Botao label="RESERVA INDISPONIVEL"/> : <Botao label="RESERVAR ASSENTO"/>    
    
    let cadastro = props.assentos <= 0 ? "Não é possível efetuar a reserva" : <Cadastro/>

    return (
        <div className="Cartao" style={estilo}>
            <div className="Titulo">{props.titulo}</div>     
            <div className="Conteudo">
                <h2> Voo nº {props.numvoo}</h2>
                <h2> Origem: {props.origem}</h2>
                <h2> Destino: {props.destino}</h2>
                <h2> Horário: {props.horasaida} até {props.horachegada}</h2>
                <h2> Assentos: {props.assentos == 0 ? "INDISPONÍVEL" : `${assentos} disponível`}</h2>
                <h2> {cadastro}</h2>
                <h2> {botao} </h2>
            </div>
        </div>
          
    )
}
export default Cartao
