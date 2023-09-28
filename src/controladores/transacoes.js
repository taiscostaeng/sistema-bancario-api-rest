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
        valor,
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
        valor,
    }

    saques.unshift(novoSaque);

    return res.status(201).json();

}

const transferencias = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;

    if (!numero_conta_origem) {
        return res.status(400).json({ mensagem: 'O número da conta de origem é obrigatório' })
    }

    if (!numero_conta_destino) {
        return res.status(400).json({ mensagem: 'O número da conta de destino é obrigatório' })
    }

    if (!valor) {
        return res.status(400).json({ mensagem: 'O valor para transferência é obrigatório' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'Senha inválida.' })
    }


    const contaOrigem = contas.find((conta) => {
        return conta.numero === Number(numero_conta_origem)
    });

    if (!contaOrigem) {
        return res.status(404).json({
            mensagem:
                'Conta de origem não encontrada'
        });
    }

    const contaDestino = contas.find((conta) => {
        return conta.numero === Number(numero_conta_destino)
    });

    if (!contaDestino) {
        return res.status(404).json({
            mensagem:
                'Conta de destino não encontrada'
        });
    }


    if (contaOrigem.usuario.senha !== senha) {
        return res.status(404).json({
            mensagem:
                'Senha inválida'
        });
    }


    if (contaOrigem.saldo < valor) {
        return res.status(404).json({
            mensagem:
                'Saldo insuficiente'
        });
    }

    // Subtrair o valor da transfência do saldo na conta de origem

    contaOrigem.saldo = contaOrigem.saldo - valor
    contaDestino.saldo = contaDestino + valor



}



module.exports = {
    deposito,
    saque,
    transferencias
}