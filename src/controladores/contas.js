let { banco, contas, saques, depositos, transferencias } = require('../bancodedados');

const cadastroDeNovaContaBancaria = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' })
    }

    if (!cpf) {
        return res.status(400).json({ mensagem: 'O cpf é obrigatório' })
    }

    if (!data_nascimento) {
        return res.status(400).json({ mensagem: 'A data de nascimento é obrigatória' })
    }

    if (!telefone) {
        return res.status(400).json({ mensagem: 'O telefone é obrigatório' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatório' })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: 'A senha é obrigatória' })
    }

    let saldo = 0
    let identificadorDeContaBancaria = 1

    contas.find((numeroDaContaAtual) => {
        return numeroDaContaAtual > numero
    })

    const novaContaBancaria = {
        numero: identificadorDeContaBancaria++,
        saldo,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha,
        }
    }

    contas.push(novaContaBancaria);

    return res.status(201).json(novaContaBancaria);
}


const listarContas = (req, res) => {
    const { senha_banco } = req.query

    if (senha_banco === "Cubos123Bank") {
        return res.status(200).json(contas);
    } else {
        return res.status(403).json({ mensagem: "A senha do banco informada é inválida!" });
    }

}


module.exports = {
    cadastroDeNovaContaBancaria,
    listarContas
}