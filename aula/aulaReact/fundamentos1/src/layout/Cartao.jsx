import React from "react"
import '../layout/Cartao.css'

const Cartao = props => {
    return (
        <div className="Cartao">
            <div className="Titulo">{props.titulo}</div>     
            <div className="Conteudo">{props.children}</div>  
        </div>
          
    )
}
export default Cartao