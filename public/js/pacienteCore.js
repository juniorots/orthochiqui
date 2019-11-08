var listapaciente = angular.module('listapaciente', []);
 
function mainController($scope, $http) {    
 
    var initpaciente = function (){
        $http.get('/api/paciente')
            .success(function(data) {
                $scope.paciente = data;
                $scope.formPaciente = {};
                console.log("paciente: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    initpaciente();
 
    $scope.criarpaciente = function() {
        $http.post('/api/paciente', $scope.formPaciente)
            .success(function(data) {
                $scope.formPaciente = {};
                $scope.paciente = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
 
    $scope.deletarpaciente = function(id) {
        $http.delete('/api/paciente/' + id)
            .success(function(data) {
                $scope.paciente = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
     
    $scope.editarpaciente = function(id) {
        $http.get('/api/paciente/' + id)
            .success(function(data) {
                $scope.formPaciente = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
 
    $scope.atualizarpaciente = function() {        
        $http.put('/api/paciente/' + $scope.formPaciente._id, $scope.formPaciente)
        .success( function(response){
            refresh();
        });
    };
 
}
