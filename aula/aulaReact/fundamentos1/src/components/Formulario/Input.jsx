import React, { useState }from "react";

const Input = props => {

    const [valor, setValor] = useState("INICIAL")

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div>
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar} />

            <input value={valor} readOnly/>

            <input value={undefined}/>

        </div>
    )
}

export default Input