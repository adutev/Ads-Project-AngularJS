'use strict'

app.controller('LoginController', ['$scope', '$rootScope', '$location', 'authorization', 'sessionControl', 'notifications', function($scope, $rootScope, $location, authorization, sessionControl, notifications){
	$scope.credentials = {
        username: '',
        password: ''
    };

	$scope.login = function(credentials) {
		 authorization.login(credentials).then(function(user) {
            sessionControl.saveCurrentSession(user);
            $rootScope.$broadcast('loginSuccess');
            $scope.changeRoute('/');
            notifications.loginSuccess();
        }, function(error) {
            $rootScope.$broadcast('loginFailed');
            notifications.loginFailed(error);
        });
	}
}])

