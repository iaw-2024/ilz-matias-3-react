import React from 'react';

export const SegundoComponente = () => {

  const handleAgregarAlimento = () => {
    const nuevoAlimento = prompt('Ingrese el nombre del nuevo alimento:');
    if (nuevoAlimento) {
      alert(`Alimento agregado! : ${nuevoAlimento}`);
    }
  };

  return (
    <div>
      <h2>Listado</h2>
      <button onClick={handleAgregarAlimento}>Agregar alimento</button>
    </div>
  );
};
