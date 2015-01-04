'use strict'

app.controller('HomeController', ['$scope', '$rootScope', '$location', 'authorization', 'sessionControl', function($scope, $rootScope, $location, authorization, sessionControl) {
	function refreshFrontPage() {
		if (sessionControl.isLogged()) {
			$scope.userIsLogged = true;
		} else {
			$scope.userIsLogged = false;
			// $scope.clickedMyAdds = false;
		}
		// This event is sent by loginController when the user has logged 
		// to hide login/register buttons
		$rootScope.$on("loginSuccess", function() {
			$scope.userIsLogged = true;
		});
	}

	refreshFrontPage();


	$scope.logout = function() {
		authorization.logout().then(function(data) {
			sessionControl.deleteSession();
			$rootScope.$broadcast('logoutSuccess');
			$scope.userIsLogged = false;
			$scope.changeRoute('/');

		}, function() {
			$rootScope.$broadcast('logoutFailed');
		});
	}

	$scope.changeRoute = function(route) {
		$location.path(route);
	}
}])