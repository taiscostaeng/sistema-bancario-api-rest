let { contas, depositos, saques } = require('../bancodedados');

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

    const novoDeposito = {
        data: new Date(),
        numero_conta,
        valor: conta.saldo,
    }

    // deve-se registrar o valor depositado ou o saldo pós deposito?

    depositos.unshift(novoDeposito);

    return res.status(201).json();

}


const saque = (req, res) => {
    const { numero_conta, valor, senha } = req.body;

    if (!numero_conta) {
        return res.status(400).json({ mensagem: 'O número da conta é obrigatório' })
    }

    if (!valor) {
        return res.status(400).json({ mensagem: 'O valor para deposito é obrigatório' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha é obrigatória' })
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

    if (conta.usuario.senha !== senha) {
        return res.status(400).json({ mensagem: 'Senha inválida' })
    }

    if (conta.saldo <= valor) {
        return res.status(400).json({ mensagem: 'Saldo insuficiente' })
    }

    conta.saldo = conta.saldo - Number(valor)

    const novoSaque = {
        data: new Date(),
        numero_conta,
        valor: conta.saldo,
    }

    // deve-se registrar o valor sacado ou o saldo pós saque?

    saques.unshift(novoSaque);

    return res.status(201).json();

}


const saldo = (req, res) => {
    const { numero_conta, senha } = req.query;

    if (!senha) {
        return res.status(403).json({ mensagem: "É necessário informar uma senha" });
    }

    if (!numero_conta) {
        return res.status(403).json({ mensagem: "É necessário informar um numero de conta" });
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

    if (conta.usuario.senha !== senha) {
        return res.status(403).json({ mensagem: "Senha inválida!" });
    }

    return res.status(200).json(conta.saldo);

}


module.exports = {
    deposito,
    saque,
    saldo
}