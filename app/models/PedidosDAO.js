function PedidosDAO(connection){
    this._connection = connection;
}

PedidosDAO.prototype.getPedidos= function(callback){
    this._connection.query('select * from pedidos order by dataPedido desc', callback);
}

PedidosDAO.prototype.getPedido = function(idPedidos, callback){
    this._connection.query('select * from pedidos where idPedidos =' + idPedidos.idPedidos, callback );
}

PedidosDAO.prototype.salvarPedido = function(pedido, callback){
    this._connection.query('insert into pedidos set ? ', pedido, callback);
}

PedidosDAO.prototype.get5UltimosPedidos = function(callback){
    this._connection.query('select * from pedidos order by dataPedido desc limit 5',callback)
}
module.exports = function(){    
    return PedidosDAO;
}