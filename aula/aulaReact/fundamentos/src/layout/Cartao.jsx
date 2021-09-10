import React from "react"
import '/Cartao.css'

const Cartao = props => {
    return (
        <div className="Cartao">
            <div className="Titulo">{props.titulo}</div>     
            <div className="conteudo">{props.children}</div>  
        </div>
          
    )
}
export default Cartao