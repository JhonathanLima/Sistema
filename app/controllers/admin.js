module.exports.formAddPedido = function(app, req, res){
    res.render("admin/formAddPedido", {validacao:{}, pedido:{}});
}

module.exports.pedido_salvar = function(app, req, res){
    var pedido = req.body;

    //validando dados do cadastro de um pedido.
    req.assert('nomeCliente', 'Cliente é obrigatório').notEmpty();
    req.assert('cidadeCliente', 'Cidade é obrigatório').notEmpty();
    req.assert('estadoCliente', 'Estado é é obrigatório').notEmpty();
    req.assert('descricaoPedido', 'Descrição é obrigatório').notEmpty();

    //recuperando os erros que foram gerados por não preencher os dados de cadastro de pedido.
    var erros = req.validationErrors();

    if(erros){
        //enviando os erros para a tela adicionar pedidos
        res.render("admin/formAddPedido", {validacao : erros, pedido : pedido});
        return erros;
    }
    
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    pedidosDAO.salvarPedido(pedido, function (error, result){
        res.redirect('/pedidos');
    });
}

//adicionando o formulario de inclusão de cheques

module.exports.formAddCheque = function(app, req, res){
    res.render("admin/formAddCheque", {validacao:{}, cheque:{}});
}

module.exports.cheque_salvar = function(app, req, res){
    var cheque = req.body;

    //validando dados do cadastro de um cheque.
    req.assert('bancoCheque', 'Banco é obrigatório').notEmpty();
    req.assert('agenciaCheque', 'Agência é obrigatório').notEmpty();
    req.assert('contaCheque', 'Conta é é obrigatório').notEmpty();
    req.assert('valorCheque', 'Valor do cheque é obrigatório').notEmpty();
    req.assert('dataVencCheque', 'Data do vencimento é obrigatório').notEmpty();
    req.assert('tipoCheque', 'Descrição é obrigatório').notEmpty();
    //recuperando os erros que foram gerados por não preencher os dados de cadastro de cheque.
    var erros = req.validationErrors();

    if(erros){
        //enviando os erros para a tela adicionar cheque
        res.render("admin/formAddCheque", {validacao : erros, cheque : cheque});
        return erros;
    }
    
    var connection = app.config.bdconnection();
    var chequesDAO = new app.app.models.ChequesDAO(connection);

    chequesDAO.salvarCheque(cheque, function (error, result){
        res.redirect('/cheques');
    });
}

//adicionando o formulario de inclusão de funcionarios

module.exports.formAddFuncionario = function(app, req, res){
    res.render("admin/formAddFuncionario", {validacao:{}, funcionario:{}});
}

module.exports.funcionario_salvar = function(app, req, res){
    var funcionario = req.body;

    //validando dados do cadastro de um funcionairo.
    req.assert('nomeFuncionario', 'Nome é obrigatório').notEmpty();
    req.assert('cpfFuncionario', 'CPF é obrigatório').notEmpty();
    req.assert('loginFuncionario', 'Login é é obrigatório').notEmpty();
    req.assert('senhaFuncionario', 'Senha do cheque é obrigatório').notEmpty();
    //recuperando os erros que foram gerados por não preencher os dados de cadastro de funcionario.
    var erros = req.validationErrors();

    if(erros){
        //enviando os erros para a tela adicionar funcionario
        res.render("admin/formAddFuncionario", {validacao : erros, funcionario : funcionario});
        return erros;
    }
    
    var connection = app.config.bdconnection();
    var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

    funcionariosDAO.salvarFuncionario(funcionario, function (error, result){
        res.redirect('/funcionarios');
    });
}