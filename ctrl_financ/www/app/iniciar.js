// objeto principal - usado em toda a aplicacao
var app = angular.module("ctrlFinan" , ["ngRoute", "ionic"]);


app.config( function($routeProvider, $ionicConfigProvider){
	
	
	$ionicConfigProvider.tabs.position("bottom");
	
	
	// definicao de rotas 
	$routeProvider.when("/alimentacao",{templateUrl: "app/views/alimentacao.html", controller: "ctrlAlim"})
			      .when("/cadastrar",{templateUrl: "app/views/cadastrar.html", controller: "ctrlAlim"})
			      	
	
	
	// tela padrao 
	$routeProvider.otherwise({ redirectTo: "/alimentacao" });
	
	
}); // fim config 


