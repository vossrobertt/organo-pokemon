import "./Formulario.css"
import CampoTexto from '../CampoTexto'
import ListaSuspensa from "../ListaSuspensa";

const Formulario = () => {

    const treinadores = [
        'Lebron James',
        'The Rock',
        'Messi',
        'Donald Trump',
        'Akon',
        'John Cena',
        'Naruto'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o PokéCard</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do Pokemon" />
                <CampoTexto label="Cargo" placeholder="Digite seu tipo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
                <ListaSuspensa label="Treinador" itens={treinadores}/>
            </form>
        </section>
    )
}

export default Formulario;