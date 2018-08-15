module.exports =  function(app){        
    //recuperando todos os funcionarios   
        app.get('/funcionarios', function(req, res){
            app.app.controllers.funcionarios.funcionarios(app, req, res);
            
    
            
        });
    
    // recuperando um funcionario especifico
        app.get('/funcionario', function(req, res){
            app.app.controllers.funcionarios.funcionario(app, req, res);
            
        });
        
    }