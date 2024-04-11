import React,{useState, useEffect} from 'react'
export const TercerComponente = () => {
const [data, setData] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3001/datos')
       .then(res => res.json())
       .then(data => setData(data))
       .catch(err => console.log(err))
    },[]);
  
    return (
    <div>
        <h1>Listado</h1>
        <ul>
            {data.map(dato => 
            <li key={dato.id}>{dato.nombre} - {dato.descripcion}</li>)}
        </ul>
    </div>
  );
};

