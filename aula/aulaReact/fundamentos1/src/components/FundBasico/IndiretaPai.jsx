import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho.jsx"

const Pai = props => {

    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [solteiro, setSolteiro] = useState(false)

    function informacoes(nome, idade, solteiro){
        setNome(nome)
        setIdade(idade)
        setSolteiro(solteiro)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{solteiro ? 'verdadeiro' : 'falso'} </span>
            </div>

            <IndiretaFilho quandoClicar={informacoes}></IndiretaFilho>

        </div>
    )
}

export default Pai