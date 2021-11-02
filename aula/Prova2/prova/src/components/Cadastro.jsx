import React from "react";

const Cadastro = _ => {
    return (
        <div>
            <div>
                <label for="exampleInputEmail1">Nome: </label>
                <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="seu nome"/>
            </div>
            <div>
                    <label for="exampleInputPassword1">E-mail: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="seu e-mail"/>
            </div>
        </div>
    )
}

export default Cadastro