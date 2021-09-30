import React from "react";
import clientes from "../../data/cliente";

const Cliente = props => {

    const lista = clientes.map((cliente) => {
        return ( 
            <li>
                {cliente.id}) {cliente.nome} <br/>
                <strong>Total compra:</strong> R${cliente.compra} <hr/>
            </li>
        )
    })

    return (
        <div>
            <ul style= {{listStyle:"none"}}>
                {lista}
            </ul>
        </div>
    )
}

export default Cliente