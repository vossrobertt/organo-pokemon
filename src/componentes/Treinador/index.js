import Pokemon from '../Pokemon'
import './Treinador.css'

const Treinador = (props) => {
    const corFundo = { backgroundColor: props.corSecundaria }
    const corTraco = { borderColor : props.corPrimaria }

    return (
        (props.colaboradores.length > 0) ? <section className='Treinador' style={corFundo}>
            <h3 style={corTraco} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Pokemon nome={colaborador.nome} tipo={colaborador.tipo} imagem={colaborador.imagem}/> )}
            </div>
        </section>
        : ''
    )
}

export default Treinador;