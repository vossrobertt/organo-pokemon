import './Treinador.css'

const Treinador = (props) => {
    const corFundo = { backgroundColor: props.corSecundaria }
    const corTraco = { borderColor : props.corPrimaria }

    return (
        <section className='Treinador' style={corFundo}>
            <h3 style={corTraco} >{props.nome}</h3>
        </section>
    )

}

export default Treinador;