import React from "react";

const Filho = props => {

    const callback = props.quandoClicar

    return (
        <div>
            <button onClick={_ => callback('alfredo', 53, true)}>Fornecer as informações</button>
        </div>
    )
}

export default Filho