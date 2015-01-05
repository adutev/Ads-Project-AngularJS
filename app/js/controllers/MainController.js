'use strict'

app.controller('MainController', ['$scope', '$rootScope', '$location', 'authorization', 'sessionControl', 'getAds', function($scope, $rootScope, $location, authorization, sessionControl, getAds) {
	function refreshFrontPage() {
		if (sessionControl.isLogged()) {
			$rootScope.userIsLogged = true;
		} else {
			$rootScope.userIsLogged = false;
			// $scope.clickedMyAdds = false;
		}
		// This event is sent by loginController when the user has logged 
		// to hide login/register buttons
		$rootScope.$on("loginSuccess", function() {
			$rootScope.userIsLogged = true;
		});
		$rootScope.$on("logoutSuccess", function() {
			$rootScope.userIsLogged = false;
		});
	}

	refreshFrontPage();


	$scope.logout = function() {
		authorization.logout().then(function(data) {
			sessionControl.deleteSession();
			$rootScope.$broadcast('logoutSuccess');
			$rootScope.userIsLogged = false;
			refreshFrontPage();
			$scope.changeRoute('/');

		}, function() {
			$rootScope.$broadcast('logoutFailed');
		});
	}

	$scope.changeRoute = function(route) {
		$location.path(route);
	}

}]);