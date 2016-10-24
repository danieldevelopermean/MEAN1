app.controller("ctrlAlim", function($scope,serviceAlime, $location, $http, $timeout,$filter,$window  ){
	
	if($location.url() == "/alimentacao"){
	serviceAlime.Listar()
		.success(function(registrado){
			
			$scope.alimentos = registrado;
		})
		.error(function(){
			
		})
		
	} // fim do if
	
	$scope.novoAlimento = {};
	
    $scope.clickLimpar = function () {
        $scope.novoAlimento.descricao = "";
        $scope.novoAlimento.valor = "";
        $scope.novoAlimento.tipo = "";
        $scope.novoAlimento.Data = "";
    }
	
	

			

	
	
	
	$scope.cadastrarAlim = function(){
		

		 
	
		
		serviceAlime.Cadastrar($scope.novoAlimento)
		.success(function () {
			
			$window.location.href = "#/alimentacao";
			$scope.clickLimpar();   
			
			
			})
        .error(function () {         });
		
	
		
		

		
	}; // fim do cadastrarAlim
	
	
	
	
	$scope.Deletar2 = function(id) {
        $http.delete('http://localhost:12345/api/cf/' + id)
            .success(function(data) {
                $scope.deletado = data;
				
                console.log("Entrou no deletar sucesso " +data);
				
				
				serviceAlime.Listar()
					.success(function(registrado){
						
						$scope.alimentos = registrado;
					})
					.error(function(){
						
					})

				
				
            })
			
            .error(function(data) {
                console.log('Error: ' + data + "Entrou no erro do delete" );
            });
			
			
			//$window.location.reload(true);
    };
	


	
	

	
});// fim controller 