import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Treinador from './componentes/Treinador';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Treinador nome="Lebron James"/>
      <Treinador nome="The Rock"/>
    </div>
  );
}

export default App;