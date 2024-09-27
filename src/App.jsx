import './App.css';
import Navbar from './Components/NavBar';
import SectionA from './Components/SectionA';
import Rodape from './Components/Rodape';
import SectionB from './Components/SectionB';

function App() {

  return (
    <div className="App">
      <Navbar />
        <SectionA />
        <SectionB />
      <Rodape />
    </div>
  );
}

export default App;
