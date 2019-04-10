

// importar o modulo express 
const express = require('express');

//separa a parte de rotas do server
const routes = express.Router();
const BoxController = require('./controllers/BoxController');


// cria uma rota de acesso para usuario, com middleware (interceptador/funçao) que modifica ou retorna uma resposta
routes.post("/boxes", BoxController.store);
module.exports = routes; // exporta a variavel routes 
