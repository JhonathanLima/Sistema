module.exports =  function(app){        
    //recuperando todos os cheques   
    app.get('/cheques', function(req, res){
        app.app.controllers.cheques.cheques(app, req, res);       
    });


    // recuperando um cheque especifico
    app.get('/cheque', function(req, res){
        app.app.controllers.cheques.cheque(app, req, res);
        
    });
}