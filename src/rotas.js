const express = require('express');
const contas = require('./controladores/contas');

const rotas = express();


//cadastrar conta
rotas.post('/contas', contas.cadastroDeNovaContaBancaria);

//listar contas através de liberação de senha
rotas.get('/contas', contas.listarContas)



module.exports = rotas;