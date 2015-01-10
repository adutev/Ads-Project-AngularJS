'use strict'

app.directive('filters', function(){
	// Runs during compile
	return {
		controller: 'HomeController',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/filters.html',
		replace: true,
	};
});