<h1> API REST - Sistema Bancário 🔐💰 </h1>

<p> Esse repositório demonstra os códigos desenvolvidos para finalização do Modulo 02 do curso de Desenvolvimento Back-End pela instituição Cubos Academy. Fomos desafiados pela Cubos Academy a desenvolver um sistema bancário API REST 🤯🎯 </p>
<li> Desenvolvi 09 rotas que buscam realizar operações básicas de um sistema bancário; </li>
<li> As rotas possuem como tipo de resquisição req.body, req.params e/ou req.params; </li>
<li> Todas as rotas possuem a exibição de um status code adequado a resposta da requisição, seja do tipo bem-sucedida ou mal-sucedida; </li>
<li> Foram criados dois controladores (transações e contas) para armazenamento dos códigos das rotas criadas. </li> 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> 👩🏽‍🔧 Linguagens e Ferramentas </h2>
<li> JAVASCRIPT </li>
<li> NODEJS </li>
<li> PROTOCOLO HTTP </li>
<li> JSON </li>
<li> BIBLIOTECAS NODEMON E EXPRESS </li>
<li> INSOMNIA </li>
<li> VSCODE </li>
<li> GIT </li>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 01: Criar conta bancária ✅💳 </h2>
<div>
  <h3> POST /contas </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/45ad7592-db4b-4015-8bb2-d9afd8e17bc7">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Cria uma nova conta bancária cujo número (ID) é único; </li>
<li> Verifica se o CPF e e-mail já foram vinculados a um outro usuário;</li>
<li> Verifica se todos os campos foram informados (todos são obrigatórios); </li>
<li> Define o saldo inicial da conta como R$0,00. </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 02: Exibir contas bancárias ✅🕵🏽‍♀️ </h2>
<div>
    <h3> GET /contas </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/85f6c6cc-e29f-4f43-ab86-57e5b2ee6022">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Lista todas as contas bancárias existentes no banco; </li>
<li> Verificar se a senha do banco foi informada (passado como query params na url); </li>
<li> Validar se a senha do banco está correta. </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 03: Atualizar usuário da conta bancária ✅🔄 </h2>
<div>
  <h3> PUT /contas/:numeroConta </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/9fce1a65-72a6-476d-9645-2f61a5356736">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Atualiza os dados do usuário de uma conta bancária; </li>
<li> Verifica se todos os campos foram informados (todos são obrigatórios); </li>
<li> Verifica se o numero da conta passado como parametro na URL é válida; </li>
<li> Verifica se o CPF e e-mail já foram vinculados a um outro usuário; </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 04: Excluir conta 🗑💰 </h2>
<div>
  <h3> DELETE /contas/:numeroConta </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/56e5f342-669b-4ef0-ab3e-3dcb871ae526">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li>Verifica se o numero da conta passado como parametro na URL é válido; </li>
<li>Permite apenas a exclução da conta bancária se o saldo for R$0,00; </li>
<li>Exclui a conta do objeto. </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 05: Depositar 💰🤑 </h2>
<div>
  <h3> POST /transacoes/depositar </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/3c70ae5d-4463-430c-82b4-3cffaf5d174d">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Verifica se o numero da conta e o valor do deposito foram informados no body; </li>
<li> Verifica se a conta bancária informada existe; </li>
<li> Não permite depósitos com valores negativos ou zerados; </li>
<li> Soma o valor de depósito ao saldo da conta; </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 06: Sacar 💸🤑 </h2>
<div>
  <h3> POST /transacoes/sacar </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/274a0df8-59a3-459c-98f1-4c0959951efa">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Verifica se o numero da conta, o valor do saque e a senha foram informados no body; </li>
<li> Verifica se a conta bancária informada existe; </li>
<li> Verifica se a senha informada é uma senha válida para a conta informada; </li>
<li> Verifica se há saldo disponível para saque; </li>
<li> Subtrai o valor sacado do saldo da conta encontrada; </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 07: Saldo 💲🤑 </h2>
<div>
  <h3> GET /contas/saldo </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/a191b84e-7858-403b-960f-e1c5d6ebb121">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Verifica se o numero da conta e a senha foram informadas (passado como query params na url); </li>
<li> Verifica se a conta bancária informada existe; </li>
<li> Verifica se a senha informada é uma senha válida; </li>
<li> Exibe o saldo da conta bancária em questão. </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 08: Extrato Bancário 🧾💲 </h2>
<div>
  <h3> GET /contas/extrato </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/a7679425-0bca-459e-8bda-8c15f555a8f2">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Verifica se o numero da conta e a senha foram informadas (passado como query params na url); </li>
<li> Verifica se a conta bancária informada existe; </li>
<li> Verifica se a senha informada é uma senha válida; </li>
<li> Retorna a lista de transferências, depósitos e saques da conta em questão.</li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> Rota 09: Transferência entre Contas 💰🤑 </h2>

<div>
  <h3> POST /transacoes/transferir </h3>
  <img src = "https://github.com/taiscostaeng/sistema-bancario-api-rest/assets/138815703/dd402811-2d62-4f3f-bf9c-02d099289817">
</div>

<div>
<h3> O quê essa rota faz? 🤔 </h3>
<li> Verifica se o número da conta de origem, de destino, senha da conta de origem e valor da transferência foram informados no body; </li>
<li> Verifica se a conta bancária de origem informada existe; </li>
<li> Verifica se a conta bancária de destino informada existe; </li>
<li> Verifica se a senha informada é uma senha válida para a conta de origem informada; </li>
<li> Verifica se há saldo disponível na conta de origem para a transferência; </li>
<li> Subtrai o valor da transfência do saldo na conta de origem; </li>
<li> Soma o valor da transferência no saldo da conta de destino. </li>
</div>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> ✨😊 Você quer contribuir com esse projeto? </h2>
<li> Primeiro, você precisa realizar o fork desse projeto; </li>
<li> Em seguida, configure o seu servidor. Você pode realizar o passo a passo seguindo esse link aqui </li>
<li> Depois, você pode realizar as alterações no código; </li>
<li> Por fim, você precisa realizar o Pull Request (PR) para esse repositório; </li>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2> 🎖🏆 Funcionalidades do Projeto </h2>
Esse projeto foi desenvolvido para executar as funções básicas de um sistema bancário:
<ol>
  <li> Criar conta bancária </li>
  <li> Listar todas contas bancárias cadastradas </li>
  <li> Atualizar usuário </li>
  <li> Deletar conta </li>
  <li> Realizar depóstio </li>
  <li> Realizar saque </li>
  <li> Consultar saldo </li>
  <li> Consultar extrato bancário </li>
  <li> Realizar transferências entre contas bancárias </li>
</ol>
