'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('adsApplication', [
	'ngRoute',
	'angularUtils.directives.dirPagination',
	'angular-growl'
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

	$routeProvider.when('/user/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/user/ads/publish', {
		templateUrl: 'partials/publishNewAd.html',
		controller: 'PublishNewAdController'
	});

	$routeProvider.when('/user/ads', {
		templateUrl: 'partials/userAds.html',
		controller: 'UserAdsController'
	});

	$routeProvider.when('/user/ads/delete/:id', {
		templateUrl: 'partials/deleteAd.html',
		controller: 'DeleteAdController'
	});

	$routeProvider.when('/unauthorized', {
		templateUrl: 'partials/notAuthorized.html'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);


app.config(['growlProvider', function(growlProvider) {
	growlProvider.globalTimeToLive(4000);
	growlProvider.globalPosition('top-center');
}]);

app.run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeStart', function(event, next) {
		var path = $location.path();
		if ($rootScope.userIsLogged && (path === '/login' ||
				path === '/register')) {
			$location.path('/user/home');
		}
	});
});

app.constant('BASE_URL', 'http://softuni-ads.azurewebsites.net/api');