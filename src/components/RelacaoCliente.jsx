import "./RelacaoCliente.css"

export default function RelacaoCliente(props) {

    return (
        <>

            <div className="col-9">
                <h1 className="titulo-cliente" >Relação com o cliente</h1>
                <p className="texto-titulo" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui eligendi at, ea possimus dolorum suscipit ipsa quidem doloribus esse natus
                    minus quisquam quibusdam quis modi vero asperiores quos eum! Sunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed quisquam veniam sunt
                    ex alias quasi similique! Perspiciatis, in repudiandae! 
                    At explicabo facere iusto eius! Numquam labore eveniet architecto ipsum.
                </p>
            </div>
            <div className="imagem-rottwei col-3">
                <img src={props.foto} alt="#" />
            </div>
        </>
    )
}