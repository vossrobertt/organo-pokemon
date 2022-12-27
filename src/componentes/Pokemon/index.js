import './Pokemon.css'

const Pokemon = ({nome, imagem, tipo}) => {
    return ( 
        <div className="Pokemon">
            <div className="cabecalho">
            <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
            </div>  
        </div>
    )
}

export default Pokemon