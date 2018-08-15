module.exports =  function(app){        
//recuperando todos os pedidos   
    app.get('/pedidos', function(req, res){
        app.app.controllers.pedidos.pedidos(app, req, res);
        

        
    });

// recuperando um pedido especifico
    app.get('/pedido', function(req, res){
        app.app.controllers.pedidos.pedido(app, req, res);
        
    });
    
}