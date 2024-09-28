import './App.css';
import Navbar from './Components/NavBar';
import Rodape from './Components/Rodape';
import Home from './Components/Pages/Home';
import Contatos from './Components/Pages/Contatos';
import Servicos from './Components/Pages/Servicos';
import QuemSomos from './Components/Pages/QuemSomos';

function App() {
  //para vermos as diferentes telas basta alterarmos
  //o nome da pagina visivel com as seguintes opcoes
  //opcoes home, quemSomos, servicos, contatos

  const paginaVisivel = 'quemSomos'; //altere somente nessa linha

  return (
    <div className="App">
      <Navbar />
        {paginaVisivel === 'home' &&
        <Home />}
        {paginaVisivel === 'contatos' &&
        <Contatos />}
        {paginaVisivel === 'servicos' &&
        <Servicos />}
        {paginaVisivel === 'quemSomos' &&
        <QuemSomos />}
      <Rodape />
    </div>
  );
}

export default App;
