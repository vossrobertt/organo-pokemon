import './Pokemon.css'

const Pokemon = ({nome, imagem, tipo, corDeFundo}) => {
    return ( 
        <div className="Pokemon">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
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