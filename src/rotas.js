const express = require('express');
const contas = require('./controladores/contas');

const rotas = express();


//cadastrar conta
rotas.post('/contas', contas.cadastroDeNovaContaBancaria);

//listar contas através de liberação de senha
rotas.get('/contas', contas.listarContas);

//atualizar usuário da conta bancária
rotas.put('/contas/:numeroConta/usuario', contas.atualizarUsuario);

//deletar conta bancária
rotas.delete('/contas/:numeroConta', contas.excluirConta);


module.exports = rotas;