'use strict'

app.directive('allAds', function(){
	// Runs during compile
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/allAds.html',
		replace: true,
	};
});