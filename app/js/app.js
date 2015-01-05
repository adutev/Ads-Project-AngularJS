'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('adsApplication', [
	'ngRoute',
	'angularUtils.directives.dirPagination'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'partials/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/unauthorized', {
		templateUrl: 'partials/notAuthorized.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);

app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function(event, next) {
		var path = $location.path();
		if ($rootScope.userIsLogged && (path === '/login' ||
			path === '/register')) {
			$location.path('/');
		}
	});
});

app.constant('BASE_URL', 'http://softuni-ads.azurewebsites.net/api');