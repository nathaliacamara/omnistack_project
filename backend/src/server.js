const express = require('express');
// importar o mongoose
const mongoose = require('mongoose');

const app = express();
// colar url do mongodbatlas/ trocar admin pelo usuario omnistack
mongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-1kfme.mongodb.net/omnistack?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

//cadastrar um modulo dentro do express para ajudar o servidor a entender as requisiçoes em formato json
// estrutura de dados mais utilizada da api rest  
app.use(express.json());

//permite que envie arquivo nas nosssa requisiçoes ->urlencoded
app.use(express.urlencoded({ extended: true }));

//passa o require para caminho da pasta
app.use(require('./routes'));


app.listen(3333);  // passa uma porta  e roda no terminal node server.js


