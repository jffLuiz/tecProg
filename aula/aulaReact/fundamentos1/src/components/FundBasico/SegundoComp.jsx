export default function Parametro(props){
    let num = props.numero
    num=num*10

    return (
        <div>
            <h1>Componente 2</h1>
            <h2> {props.titulo} </h2>
            <h3> {props.subtitulo}o</h3>
            <p> {num} </p>
        </div>
    )
}