const express = require('express');
const contas = require('./controladores/contas');
const transacoes = require('./controladores/transacoes')

const rotas = express();


//cadastrar conta
rotas.post('/contas', contas.cadastroDeNovaContaBancaria);

//listar contas através de liberação de senha
rotas.get('/contas', contas.listarContas);

//atualizar usuário da conta bancária
rotas.put('/contas/:numeroConta', contas.atualizarUsuario);

//deletar conta bancária
rotas.delete('/contas/:numeroConta', contas.excluirConta);

//deposito
rotas.post('/transacoes/depositar', transacoes.deposito);

//saque
rotas.post('/transacoes/sacar', transacoes.saque);

//listar saldo através de liberação de senha
rotas.get('/contas/saldo', transacoes.saldo);

module.exports = rotas;