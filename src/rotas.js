const express = require('express');
const contas = require('./controladores/contas');
const transacoes = require('./controladores/transacoes')

const rotas = express();


rotas.post('/contas', contas.cadastroDeNovaContaBancaria);

rotas.get('/contas', contas.listarContas);
rotas.get('/contas/saldo', contas.saldo);
rotas.get('/contas/extrato', contas.extrato);

rotas.put('/contas/:numeroConta', contas.atualizarUsuario);

rotas.delete('/contas/:numeroConta', contas.excluirConta);

rotas.post('/transacoes/depositar', transacoes.deposito);
rotas.post('/transacoes/sacar', transacoes.saque);
rotas.post('/transacoes/transferir', transacoes.transferencia);

module.exports = rotas;