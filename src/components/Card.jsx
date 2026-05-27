import "./Card.css"

export default function Card(props) {

    return (
        <>
            <div className="cartao-foto col">
                <img className="imagem-cartao" src={props.foto} alt="" />
                <div className="titulo-container">
                    <p className="titulo-texto" >{props.titulo}</p>
                </div>
            </div>
        </>
    )
}