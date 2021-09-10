import React from "react"

export default function numAleatorio(props){
    let min=props.min 
    let max=props.max
    // let {min, max} = props //resumida

    let random = parseInt(Math.random()*(max-min)+min)

    
    return (
        <React.Fragment>
            <h2>valor minimo: {props.min}</h2>
            <h2>valor maximo: {props.max}</h2>
            <h2>Numero Aleatório: {random}</h2>
        </React.Fragment>
    )
}