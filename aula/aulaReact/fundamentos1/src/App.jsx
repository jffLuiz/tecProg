import React from "react";
import Componente1 from './components/FundBasico/PrimeiroComp'
import Componente2 from './components/FundBasico/SegundoComp'
import Componente3 from './components/FundBasico/TerceiroComp' 
import CompAleatorio from './components/FundBasico/Aleatório'
import Cartao from './layout/Cartao'
import './App.css'

const  msg = <strong>'Olá React!!'</strong>

const App = () => {
    return <div className="App">
                <h2>Fundamentos</h2>
                <div className="Cartoes">
                    <Cartao
                        titulo = "teste cartão"
                        conteudo = "teste conteudo"
                        radio = {50}
                    />

                    <Cartao
                        titulo = "Numero Aleatorio"
                        color = '#FB2'>
                        <CompAleatorio 
                        min={5}
                        max={100}
                        />
                    </Cartao>

                    <Cartao
                        titulo = "Aluno/Escola" 
                        color='#AA5EE0'>
                        <Componente3
                            nome = "Jefferson"
                            nota = {10}   
                        />
                    </Cartao>

                    <Cartao 
                        titulo = "Numero Aleatorio" 
                        color = '#49dce0'>
                        <Componente2
                            titulo = "React"
                            subtitulo = "react mesmo"
                            numero = {9}
                        />
                    </Cartao>
                        
                    <Cartao titulo = "Componente 1">
                        <Componente1/>
                    </Cartao>
                </div>
            </div>
}

export default App