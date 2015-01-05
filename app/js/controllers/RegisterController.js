'use strict'

app.controller('RegisterController', ['$scope', '$rootScope', '$location', 'authorization', 'getTowns', function($scope, $rootScope, $location, authorization, getTowns){
	$scope.credentials = {
        username: '',
        password: ''
    };

   // get All towns
   getTowns.getAllTowns().then(function (data) {
   		$scope.townsData = data;
   })

	$scope.register = function(credentials) {
		 authorization.register(credentials).then(function(response) {
           console.log(response)
            $rootScope.$broadcast('registeredUser');
            $scope.changeRoute('/');
        }, function() {
            $rootScope.$broadcast('registeredFailed');
        });
	}
}])

