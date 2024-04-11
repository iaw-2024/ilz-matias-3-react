const express = require('express');
const app = express();
const cors = require('cors');

const datos = [

    {id: 1, nombre: 'Pizza', descripcion: 'Pizza de jamon y queso'},
    {id: 2, nombre: 'Hamburguesa', descripcion: 'Hamburguesa con queso'},
    {id: 3, nombre: 'Asado', descripcion: 'Asado con papas'},
    {id: 4, nombre: 'Milanesa', descripcion: 'Milanesa con jamon y queso'},
];
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hola mundo");
});

app.get('/datos', (req, res) => {
    console.log('Solicito todos los datos');
    res.json(datos);
})

app.listen(3001);

console.log('Servidor iniciado');

