let { contas, depositos } = require('../bancodedados');

const deposito = (req, res) => {
    const { numero_conta, Valor } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório' })
    }

    if (!Valor) {
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

    if (Valor <= 0) {
        return res.status(400).json({ mensagem: 'Valor para depósito inválido' })
    }

    conta.saldo = conta.saldo + Number(Valor)

    const novoDeposito = {
        data: new Date(),
        numero_conta,
        valor: conta.saldo,
    }

    depositos.unshift(novoDeposito);

    return res.status(201).json();

}



module.exports = {
    deposito
}