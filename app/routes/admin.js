module.exports = function (app){
    app.get('/addPedidos', function(req, res){
    	app.app.controllers.admin.formAddPedido(app, req, res);
    });

    app.post('/pedido/salvar', function(req, res){
        app.app.controllers.admin.pedido_salvar(app, req, res);
    });
    
    app.get('/addCheques',function(req, res){
        app.app.controllers.admin.formAddCheque(app, req, res);
    });

    app.post('/cheque/salvar', function(req, res){
        app.app.controllers.admin.cheque_salvar(app,req,res);
    });

    app.get('/addFuncionarios',function(req, res){
        app.app.controllers.admin.formAddFuncionario(app, req, res);
    });

    app.post('/funcionario/salvar', function(req, res){
        app.app.controllers.admin.funcionario_salvar(app,req,res);
    });
}