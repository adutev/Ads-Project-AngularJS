'use strict'

app.controller('MainController', ['$scope', '$rootScope', '$location', 'authorization', 'sessionControl', 'getAds', 'notifications', function($scope, $rootScope, $location, authorization, sessionControl, getAds, notifications) {
	function refreshFrontPage() {
		if (sessionControl.isLogged()) {
			$rootScope.userIsLogged = true;
		} else {
			$rootScope.userIsLogged = false;
		}

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
			notifications.logoutSuccess();

		}, function() {
			$rootScope.$broadcast('logoutFailed');
		});
	}

	$scope.changeRoute = function(route) {
		$location.path(route);
	}

	$scope.username = sessionControl.getUsername();

}]);