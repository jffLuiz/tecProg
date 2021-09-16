export default function aluno(props){
    let situacao=props.nota >= 6 ? "Aprovado" : "Reprovado"
    
    return (
        <div>
            <h2>Nome do Aluno: {props.nome}</h2>
            <h2>Nota: {props.nota}</h2>
            <h2>Situação: {situacao}</h2>
        </div>
    )
}