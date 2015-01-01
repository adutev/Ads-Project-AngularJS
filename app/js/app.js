var app = angular.module('app', ['ngRoute' , 'angularUtils.directives.dirPagination']);
app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html'
	});
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomePageController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	})
});