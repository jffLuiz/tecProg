import React from "react"

export default function numAleatorio(props){
    let min=props.min 
    let max=props.max
    

    let random = parseInt(Math.random()*(max-min)+min)

    
    return (
            <h2>{random}</h2>
    )
}