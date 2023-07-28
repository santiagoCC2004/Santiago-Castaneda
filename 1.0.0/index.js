const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5000;

app.use(morgan('dev'));

app.get('/',(req,res) => {
    //res.send("Hola k ase");
    res.json({
        message: "Hello world"
    });
});


app.listen(PORT, () => console.log(`Server run on ${PORT}`));