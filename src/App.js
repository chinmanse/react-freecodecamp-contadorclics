import './App.css';
import fenomenoideLogo from './img/FenomenoideLogo.webp';
import Boton from './components/Boton';
import Contador from "./components/Contador";
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0); ///useState(valorInicial_numClics)

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={ fenomenoideLogo }
          alt="Logo de freecodecamp" 
          />
      </div>
      <div className="contenedor-principal">
        <Contador 
          numeroClics= { numClics } 
        />
        <Boton 
          texto="Clic" 
          esBotonDeClic = { true } 
          manjearClic = { manejarClic }
        />

        <Boton 
          texto="Reiniciar" 
          esBotonDeClic = { false } 
          manjearClic = { reiniciarContador }
        />
        
      </div>
    </div>
  );
}

export default App;
