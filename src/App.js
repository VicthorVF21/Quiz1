import './App.css';
import ContadorLikes from './Componentes/ContadorLi';
import NombrePersona from './Componentes/NombrePer';
import Modal from './Componentes/Modal';
import Calculadora from './Componentes/Calculadora';

function App() {
  return (
    <div className="App">
      <div>
      <ContadorLikes/>
      </div>
      <div>
        <NombrePersona/>
      </div>
      <br/>
      <div>
        <Modal/>
      </div>
      <div>
        <Calculadora/>
      </div>
    </div>

  );
}

export default App;
