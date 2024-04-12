import React, { useState } from 'react';

function Calculadora() {
  const [resultado, setResultado] = useState(0);
  const [primerValor, setPrimerValor] = useState('');
  const [segundoValor, setSegundoValor] = useState('');

  const sumar = () => {
    setResultado(parseInt(primerValor, 10) + parseInt(segundoValor, 10));
  };

  const restar = () => {
    setResultado(parseInt(primerValor, 10) - parseInt(segundoValor, 10));
  };

  const reiniciar = () => {
    setResultado(0);
    setPrimerValor('');
    setSegundoValor('');
  };

  return (
    <div>
      <h2>Actividad el contador</h2>
      <input
        type="number"
        placeholder="Primer valor"
        value={primerValor}
        onChange={(e) => setPrimerValor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Segundo valor"
        value={segundoValor}
        onChange={(e) => setSegundoValor(e.target.value)}
      />
      <div>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
      <h3>El resultado es: {resultado}</h3>
    </div>
  );
}

export default Calculadora;
