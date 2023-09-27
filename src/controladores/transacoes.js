let { contas } = require('../bancodedados');

const deposito = (req, res) => {
    const { numero_conta, valor } = req.body;

    const saldoAtual = contas[numero_conta].saldo

    const saldoBancarioAtualizado = {
        saldo: Number(saldoAtual) + Number(valor)
    }

    contas.saldo.push(saldoBancarioAtualizado);

    return res.status(201).json();

}




module.exports = {
    deposito
}