'use strict'

app.controller('LoginController', ['$scope', '$rootScope', '$location', 'authorization', 'sessionControl', function($scope, $rootScope, $location, authorization, sessionControl){
	$scope.credentials = {
        username: '',
        password: ''
    };

	$scope.login = function(credentials) {
		 authorization.login(credentials).then(function(user) {
            sessionControl.saveCurrentSession(user);
            $rootScope.$broadcast('loginSuccess');
            $scope.changeRoute('/');
            // noty({
            //     text: 'Happy!',
            //     layout: 'topCenter',
            //     type: 'success'
            // });

        }, function() {
            $rootScope.$broadcast('loginFailed');
        });
	}
}])

