module.exports.pedidos = function (app, req, res){
    var connection = app.config.bdconnection();
    var pedidosDAO = new app.app.models.PedidosDAO(connection);

    pedidosDAO.getPedidos(function (error, result){
        res.render("pedidos/pedidos", {pedidos : result});
    });
}

module.exports.pedido = function (app, req, res){
    var connection = app.config.bdconnection();
        var pedidosDAO = new app.app.models.PedidosDAO(connection);

        var idPedidos = req.query;

        pedidosDAO.getPedido(idPedidos, function(error, result){
            res.render("pedidos/pedido", {pedidos : result});
        });

}