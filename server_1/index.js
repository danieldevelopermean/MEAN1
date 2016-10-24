var pac_express = require("express");
var pac_bodyParser = require("body-parser");
var pacoteCors = require("cors");


var server = pac_express();
server.use(pac_bodyParser.json());
server.use(pac_bodyParser.urlencoded({extended: true}));
server.use(pacoteCors());


var pacoteMongoose = require("mongoose");
pacoteMongoose.connect("mongodb://localhost/ctrlfinanceiro")

var tabela = pacoteMongoose.model("alimentacao", {
descricao: String, valor: String , tipo: String , Data: Date
}, "alimentacao");


server.get("/api/cf", function(request, response){
	
	/*
	var alimentacao1 = [
	{ descricao : "Bolacha Chocolate " , valor : "R$ 2,76" , tipo : "Alimento", data : "26/07/2016"},
	{ descricao : "Bolacha Agua e Sal " , valor : "R$ 2,05" , tipo : "Alimento", data : "25/07/2016"}
	
	];
	
	response.send(alimentacao1);
	
	*/
	
	tabela.find({}, "descricao valor tipo Data", function (erro, sucesso) {

        if (erro)
            console.error(erro);
        else
            response.send(sucesso);


    });
	
});


server.post("/api/cf", function(request, response){
	
	var novoAlimento = new tabela(request.body);
    novoAlimento.save(function (erro, sucesso) {
        if (erro)
            console.error(erro);
        else
            response.send("Alimento Cadastrado com sucesso");

    });
	
	
	//response.send( );
});


server.delete('/api/cf/:del_id', function(req, res) {
			
	tabela.remove({
            _id : req.params.del_id
        }, function(err, deletado) {
            if (err)
                res.send(400, err + "Erro ao remover");
			else
			res.send(200, deletado + "Erro ao remover");
     
        });
    });

	
	/*
	server.put('/api/cf/:up_id', function(req, res) {

       
        tabela.findById(req.params.up_id, function(err, upda) {

            if (err)
                res.send(err);
			else
            tabela._id = req.body.up_id;  

           
           tabela.save(function(err) {
                if (err)
                    res.send(err);
				else
					res.send(200, upda + "Atualizado");
            });

        });
	  });
	
	*/
	
	
	


server.listen(12345);