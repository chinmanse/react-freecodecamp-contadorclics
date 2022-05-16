import React from 'react';
import "../style-sheets/Boton.css";

function Boton({ texto, esBotonDeClic, manjearClic }){

  return (
    <button
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
      onClick = { manjearClic }
    >
      { texto }
    </button>
  );
}

export default Boton;