import React, { useState } from 'react';
import '../EstilosComp/Modal.css'

function Modal() {
  const [Ver, setVer] = useState(false);

  const MostarModal = () => {
    setVer(!Ver);
  };

  return (
    <div>
      <button onClick={MostarModal}>
     Abrir Modal 
      </button>
      {Ver && (
        <div id="modal">
          <div id="Contenido">
            <h2>Bienvenidos al curso de Multimedia</h2>
            <button onClick={MostarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;