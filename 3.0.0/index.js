const express = require('express');
const morgan = require('morgan');
const Service = require('./src/service');
const service = require('./src/service');

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json()); // permite recibir datos tipo json de los clientes

app.get("/",(req,res) => {
    res.json({
        message : "Lista de Usuarios",
        body : Service.getUsers(),  
    })
    
})

app.get('/:id', (req,res) => {
    //const id = req.params.id;
    //desestructuracion
    let { params: { id } } = req; 
    let user = Service.getUser(id);
    res.json({
        message: `Usuario ${id}`,
        body : user
    })
});

app.post("/", (req,res) => {
    //let newUser = req.body;
    let { body : newUser } = req
    let user = service.createUser(newUser);
    res.status(201).json({
        message :"Nuevo Usuario Creado!",
        body :user
    })
});





app.listen(PORT,() => console.log(`Servidor Listen in ${PORT}`));
