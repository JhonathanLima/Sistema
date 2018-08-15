function FuncionariosDAO(connection){
    this._connection = connection;
}

FuncionariosDAO.prototype.getFuncionarios= function(callback){
    this._connection.query('select *  from funcionarios order by nomeFuncionario desc ', callback);
}

FuncionariosDAO.prototype.getFuncionario = function(idFuncionario, callback){
    this._connection.query('select * from funcionarios where idFuncionario =' + idFuncionario.idFuncionario, callback );
}

FuncionariosDAO.prototype.salvarFuncionario = function(funcionario, callback){
    this._connection.query('insert into funcionarios set ? ', funcionario, callback);
}

/*FuncionariosDAO.prototype.get5UltimosPedidos = function(callback){
    this._connection.query('select * from pedidos order by dataPedido desc limit 5',callback)
}*/
module.exports = function(){    
    return FuncionariosDAO;
}