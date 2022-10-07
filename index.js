const express = require('express');
const routes = require('./Routes/api');
const bodyParser = require('body-parser')

const app = express() 

app.use(bodyParser.json())
app.use(routes);

app.listen(process.env.port || 4000, () => {
    console.log('Now listening for requests on: http://localhost:4000');
});

