let { contas } = require('../bancodedados');

const deposito = (req, res) => {
    const { numero_conta, valor } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório' })
    }

    if (!valor) {
        return res.status(400).json({ mensagem: 'O valor para depósito é obrigatório' })
    }

    const conta = contas.find((conta) => {
        return conta.numero === Number(numero_conta)
    });

    if (!conta) {
        return res.status(404).json({
            mensagem:
                'Conta não encontrada'
        });
    }

    if (valor <= 0) {
        return res.status(400).json({ mensagem: 'Valor para depósito inválido' })
    }

    conta.saldo = conta.saldo + Number(valor)
    return res.status(201).json();

}



module.exports = {
    deposito
}