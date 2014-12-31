var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination']);
app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html'
	});
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	})
});