import React from "react";
import "../style-sheets/Contador.css";

function Contador({ numeroClics }){
  return (
    <div className="contador">
      { numeroClics }
    </div>
  );
}

export default Contador;