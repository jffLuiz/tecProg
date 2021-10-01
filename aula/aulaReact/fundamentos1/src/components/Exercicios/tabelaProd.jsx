import React from "react";
import produtos from "./produtos.js"
import './tabelaProd.css'

const Tabela = props => {
    
    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 === 0 ? "par" : "impar"}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td className="alinha">{produto.preco}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
            
        </div>
    )
}

export default Tabela

// const Tabela = props => {
//     const lista = produtos.map((produto) => {
//         return (
//             <li key={produto.id}>
//                 {produto.id} - {produto.nome} {produto.preco}
//             </li>
//         )
//     })
//     return (
//         <div>
//             <ul>
//                 {lista}
//             </ul>
//         </div>
//     )
// }

// export default Tabela