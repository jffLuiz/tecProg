import React from "react"
import Cartao from './layout/Cartao'
import './App.css'
import Display from "./components/Display"


const App = () => {
    return <div className="App">
                <h2>KONOHA AIRLINES</h2>
                <div>
                    <Display value = "VOOS DISPONÍVEIS"/>
                </div>
                <div className="Cartoes">
                    <Cartao
                        titulo = "AVIÃO 1"
                        numvoo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "KONOHAGAKURE"
                        destino = "SUNAGAKURE"
                        horasaida = "00:00"
                        horachegada = "01:11"
                        assentos = {parseInt(Math.random() * (2-0)+0)}
                    />
                    <Cartao
                        titulo = "AVIÃO 2"
                        numvoo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "KONOHAGAKURE"
                        destino = "SUNAGAKURE"
                        horasaida = "02:00"
                        horachegada = "03:22"
                        assentos = {parseInt(Math.random() * (2-0)+0)}
                    />
                    <Cartao
                        titulo = "AVIÃO 3"
                        numvoo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "KONOHAGAKURE"
                        destino = "SUNAGAKURE"
                        horasaida = "02:00"
                        horachegada = "03:22"
                        assentos = {parseInt(Math.random() * (2-0)+0)}
                    />
                    <Cartao
                        titulo = "AVIÃO 4"
                        numvoo = {parseInt(Math.random() * (1000-100)+100)}
                        origem = "KONOHAGAKURE"
                        destino = "SUNAGAKURE"
                        horasaida = "02:00"
                        horachegada = "03:22"
                        assentos = {parseInt(Math.random() * (2-0)+0)}
                    />
                </div>
            </div>
}

export default App