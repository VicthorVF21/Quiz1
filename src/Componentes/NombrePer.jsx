import React, { useState } from 'react';

function NombrePersona() {
  const [nombre, setNombre] = useState('no definido');

  return (
    <div>
      <h1>Su nombre es: {nombre}</h1>
      <input
        type="text"
        placeholder="Digite su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
    </div>
  );
}

export default NombrePersona;