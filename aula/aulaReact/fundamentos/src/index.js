import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Componente1 from './components/FundBasico/PrimeiroComp'
import Componente2 from './components/FundBasico/SegundoComp'
import Componente3 from './components/FundBasico/TerceiroComp' 

const  msg = <strong>'Olá React!!'</strong>

ReactDOM.render(
    <div>

        {/* sem variavel */}
        <strong>'Olá React!!' </strong>

        {/* com variavel */}
        {msg}
    
        <Componente1/>

        <Componente2
            titulo = "React"
            subtitulo = "react mesmo"
            numero = {9}
        />

        <Componente3
            nome = "Jefferson"
            nota = {10}    
        />

        <Componente3
            nome = "Luiz"
            nota = {3}    
        />


    </div>,
    
    document.getElementById('root')
)
