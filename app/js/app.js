var app = angular.module('app', ['ngRoute',
	'angularUtils.directives.dirPagination',
	'ui.bootstrap'
]);

app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
app.constant('AUTH_EVENTS', {
	loginSuccess: 'auth-login-success',
	loginFailed: 'auth-login-failed',
	logoutSuccess: 'auth-logout-success',
	sessionTimeout: 'auth-session-timeout',
	notAuthenticated: 'auth-not-authenticated',
	notAuthorized: 'auth-not-authorized'
});

app.config(function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'LoginController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomePageController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	})
});