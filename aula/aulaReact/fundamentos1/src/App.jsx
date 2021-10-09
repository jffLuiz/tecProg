import React from "react";
import Componente1 from './components/FundBasico/PrimeiroComp'
import Componente2 from './components/FundBasico/SegundoComp'
import Componente3 from './components/FundBasico/TerceiroComp' 
import CompAleatorio from './components/FundBasico/Aleatório'
import Cartao from './layout/Cartao'
import './App.css'
import Familia from "./components/FundBasico/Familia";
import FamiliaMembro from "./components/FundBasico/FamiliaMembro";
import Cliente from "./components/FundBasico/Cliente"
import Tabela from "./components/Exercicios/tabelaProd.jsx"
import IndiretaPai from "./components/FundBasico/IndiretaPai.jsx"
import Input from "./components/Formulario/Input.jsx"



const  msg = <strong>'Olá React!!'</strong>



const App = () => {
    return <div className="App">
                <h2>Fundamentos</h2>
                <div className="Cartoes">

                    <Cartao titulo="formulário" color="#d27">
                        <Input></Input>
                       
                    </Cartao>


                    <Cartao titulo="Comunicação indireta" color="#FB9">
                        <IndiretaPai></IndiretaPai>
                    </Cartao>

                    <Cartao titulo="exercicio tabela" color="#BA0">
                        <Tabela></Tabela>

                    </Cartao>

                    <Cartao titulo="Lista Clientes" color="#A85">
                        <Cliente></Cliente>
                    </Cartao>
                    
                    <Cartao
                        titulo = "POO"
                        color = "#8AA">
                        <Familia sobrenome="Costa">
                            <FamiliaMembro nome="Joao"/>
                            <FamiliaMembro nome="Ana"/>
                            <FamiliaMembro nome="Marcos"/>
                        </Familia>
                        <Familia sobrenome="Marques">
                            <FamiliaMembro nome="Joao"/>
                            <FamiliaMembro nome="Ana"/>
                            <FamiliaMembro nome="Marcos"/>
                        </Familia>

                        
                    </Cartao>
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