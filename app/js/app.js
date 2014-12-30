var adsApp = angular.module('adsApp', ['ngRoute']);
adsApp.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl:'templates/login.html'
	});
	$routeProvider.when('/register', {
		templateUrl:'templates/register.html'
	});
	$routeProvider.when('/', {
		templateUrl:'templates/home.html'
	});
})