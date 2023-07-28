const express = require('express');
const morgan = require('morgan');
const Service = require('./src/service');
const service = require('./src/service');

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json());

app.get("/",(req,res) => {
    res.json({
        message : "Lista de Lugares",
        body : Service.getUsers(),  
    })
    
})

app.get('/:id', (req,res) => {
    const id = req.params.id;
    let user = Service.getUser(id);
    res.json({
        message: `Usuario ${id}`,
        body : user
    })
});

app.post("/", (req,res) => {
    let { body : newUser } = req
    let user = service.createUser(newUser);
    res.status(201).json({
        message :"Nuevo Lugar Creado!",
        body :user
    })
});





app.listen(PORT,() => console.log(`Servidor Listen in ${PORT}`));
