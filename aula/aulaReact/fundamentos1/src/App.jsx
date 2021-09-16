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
                />

                <Cartao
                    titulo = "Numero Aleatorio">
                    <CompAleatorio 
                    min={5}
                    max={100}
                    />
                </Cartao>

                <Cartao titulo = "Aluno/Escola">
                    <Componente3
                        nome = "Jefferson"
                        nota = {10}   
                    />
                </Cartao>

                <Cartao titulo = "Numero Aleatorio" >
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

                <CompAleatorio 
                    min={5}
                    max={100}
                />

                
            </div>
}

export default App