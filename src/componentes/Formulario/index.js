import "./Formulario.css"
import CampoTexto from '../CampoTexto'
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

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

    const aoSalvar = (evento) => {

        evento.preventDefault()
    }

    return (
        <section className="formulario">
            <form onSubmit={() => aoSalvar()}>
                <h2>Preencha os dados para criar o PokéCard</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome do Pokemon" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu tipo" />
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereco da imagem" />
                <ListaSuspensa obrigatorio={true} label="Treinador" itens={treinadores} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;