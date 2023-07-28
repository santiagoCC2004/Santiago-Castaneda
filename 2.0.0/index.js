const express = require('express');
const morgan = require('morgan');

const data = require('./MOCK_DATA.json');


const app = express();
app.use(morgan('dev'));
const PORT = 8000;

app.get('/',(req,res) =>{
    res.json({
        message : "List of Users",
        body: data
    });
});

app.listen(PORT, () => console.log(`Server run on ${PORT}`));