const validarSenha = (req, res, next) => {
    const { senha } = req.query;
    if (!senha) {
        return res.send('a senha não foi informada');
    }

    if (senha !== "Cubos123Bank") {
        return res.send('A senha está incorreta');
    }
    next()
}

module.exports = {
    validarSenha
}