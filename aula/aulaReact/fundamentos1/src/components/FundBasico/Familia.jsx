import React from "react";
import FamiliaMembro from "./FamiliaMembro"

const Familia = props => {
    return (
        <div>
            {
                React.Children.map(props.children, (objeto) => {
                    return React.cloneElement(objeto, props)
                })
            }
        </div>
    )
}

export default Familia