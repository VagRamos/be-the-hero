const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // Antes das requisições converter json em javascript utilizando o 
app.use(routes);

app.listen(3333);
