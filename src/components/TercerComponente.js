import React, { useState, useEffect } from 'react';

export const TercerComponente = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/datos')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  const toggleShowData = () => {
    setShowData(prevState => !prevState);
  };

  return (
    <div>
      <h1>Listado</h1>
      <button onClick={toggleShowData}>
        {showData ? 'Ocultar datos del servidor' : 'Mostrar datos del servidor'}
      </button>
      {showData && (
        <ul>
          {data.map(dato => (
            <li key={dato.id}>
              {dato.nombre} - {dato.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
