import './App.css';
import Navbar from './Components/NavBar';
import Rodape from './Components/Rodape';
import Home from './Components/Pages/Home';
import Contatos from './Components/Pages/Contatos';
import Servicos from './Components/Pages/Servicos';
import QuemSomos from './Components/Pages/QuemSomos';
import { useContext } from 'react';
import PaginaAtualContext from './Contexts/PaginaAtualContext';
import Cursos from './Components/Pages/Cursos';

function App() {
  
  const {paginaAtual} = useContext(PaginaAtualContext)

  return (
    <div className="App">
      <Navbar />
        {paginaAtual === 'home' &&
        <Home />}
        {paginaAtual === 'contatos' &&
        <Contatos />}
        {paginaAtual === 'servicos' &&
        <Servicos />}
        {paginaAtual === 'quemSomos' &&
        <QuemSomos />}
        {paginaAtual === 'cursos' &&
        <Cursos />}
      <Rodape />
    </div>
  );
}

export default App;
