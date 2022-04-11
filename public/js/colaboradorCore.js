var listacolaborador = angular.module('listacolaborador', []);
 
function mainController($scope, $http) {    
 
    var initColaborador = function (){
        $http.get('/api/colaborador')
            .success(function(data) {
                $scope.colaborador = data;
                $scope.formColaborador = {};
                console.log("colaborador: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    initColaborador();
 
    $scope.criarColaborador = function() {
        $http.post('/api/colaborador', $scope.formColaborador)
            .success(function(data) {
                $scope.formColaborador = {};
                $scope.colaborador = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
 
    $scope.deletarColaborador = function(id) {
        $http.delete('/api/colaborador/' + id)
            .success(function(data) {
                $scope.colaborador = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
     
    $scope.editarColaborador = function(id) {
        $http.get('/api/colaborador/' + id)
            .success(function(data) {
                $scope.formColaborador = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
 
    $scope.atualizarColaborador = function() {        
        $http.put('/api/colaborador/' + $scope.formColaborador._id, $scope.formColaborador)
        .success( function(response){
            refresh();
        });
    };
 
}
