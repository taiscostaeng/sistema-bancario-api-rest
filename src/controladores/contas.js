let { contas } = require('../bancodedados');

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

    // pega todas as contas e busca o maior numero da conta e soma mais um

    contas.find((maiorNumeroDeConta) => {
        return maiorNumeroDeConta >= contas.numero
    })

    const novaContaBancaria = {
        numero: maiorNumeroDeConta,
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


const atualizarUsuario = (req, res) => {
    const { numeroConta, usuario } = req.params;
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

    const conta = contas.find((conta) => {
        return conta.numeroConta === Number(numeroConta);
    });

    if (!conta) {
        return res.status(404).json({
            mensagem:
                'Conta não encontrada'
        });
    }

    conta.nome = nome;
    conta.cpf = cpf;
    conta.data_nascimento = data_nascimento;
    conta.telefone = telefone;
    conta.email = email;
    conta.senha = senha;

    return res.status(204).send();
}

const excluirConta = (req, res) => {
    const { numeroConta } = req.params;

    const conta = contas.find((conta) => {
        return conta.numeroConta === Number(numeroConta);
    });

    if (!conta) {
        return res.status(404).json({ mensagem: 'A conta não existe.' })
    }

    conta = contas.filter((conta) => {
        return conta.numeroConta !== Number(numeroConta);
    });

    return res.status(204).send();
}


module.exports = {
    cadastroDeNovaContaBancaria,
    listarContas,
    atualizarUsuario,
    excluirConta
}