import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Treinador from './componentes/Treinador';

function App() {

  const treinadores = [
    {
      nome: 'Lebron James',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'The Rock',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Messi',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Donald Trump',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Akon',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'John Cena',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Naruto',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario treinadores={treinadores.map(Treinador => Treinador.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {treinadores.map(treinadores => <Treinador 
      key={treinadores.nome} 
      nome={treinadores.nome} 
      corPrimaria={treinadores.corPrimaria} 
      corSecundaria={treinadores.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.treinador === treinadores.nome) }
      />)}

    </div>
  );
}

export default App;