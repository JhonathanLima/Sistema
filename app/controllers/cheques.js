module.exports.cheques = function (app, req, res){
    var connection = app.config.bdconnection();
    var chequesDAO = new app.app.models.ChequesDAO(connection);

    chequesDAO.getCheques(function (error, result){
        res.render("cheques/cheques", {cheques : result});
    });
}

module.exports.cheque = function (app, req, res){
    var connection = app.config.bdconnection();
        var chequesDAO = new app.app.models.ChequesDAO(connection);

        var idCheques = req.query;

        chequesDAO.getCheque(idCheques, function(error, result){
            res.render("cheques/cheque", {cheques : result});
        });

}