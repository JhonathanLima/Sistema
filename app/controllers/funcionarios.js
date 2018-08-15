module.exports.funcionarios = function (app, req, res){
    var connection = app.config.bdconnection();
    var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

    funcionariosDAO.getFuncionarios(function (error, result){
        res.render("funcionarios/funcionarios", {funcionarios : result});
    });
}

module.exports.funcionario = function (app, req, res){
    var connection = app.config.bdconnection();
        var funcionariosDAO = new app.app.models.FuncionariosDAO(connection);

        var idFuncionario = req.query;

        funcionariosDAO.getFuncionarios(idFuncionario, function(error, result){
            res.render("funcionarios/funcionario", {funcionarios : result});
        });

}