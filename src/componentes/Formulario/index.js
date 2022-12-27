import "./Formulario.css"
import CampoTexto from '../CampoTexto'
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [imagem, setImagem] = useState('')
    const [treinador, setTreinador] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            tipo,
            imagem,
            treinador
        })
        setNome('')
        setTipo('')
        setImagem('')
        setTreinador('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o PokéCard</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do Pokemon"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Tipo"
                    placeholder="Digite seu tipo"
                    valor={tipo}
                    aoAlterado={valor => setTipo(valor)}

                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereco da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Treinador"
                    itens={props.treinadores}
                    valor={treinador}
                    aoAlterado={valor => setTreinador(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;