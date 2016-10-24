app.service("serviceAlime", function($http){
	
		

	this.Listar = function(){
		
		return $http({
			url: "http://localhost:12345/api/cf", 
			method:"GET"
			
		});
		
		}; // fim funcao Listar

	
	this.Cadastrar = function(arrayAlim){
		
		return $http({
			url: "http://localhost:12345/api/cf", 
			method:"POST",
			data: arrayAlim
		});
		
	}; // fim funcao Cadastrar

	
	
}); // fim service 