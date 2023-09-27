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

    let identificadorConta = 0
    let saldo = 0


    const novaContaBancaria = {
        numero: identificadorConta++,
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

//CPF deve ser um campo único.
//E-mail deve ser um campo único.


const listarContas = (req, res) => {
    return res.status(200).json(contas);
}



module.exports = {
    cadastroDeNovaContaBancaria,
    listarContas
}