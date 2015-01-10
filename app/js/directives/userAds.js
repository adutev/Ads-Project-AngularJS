'use strict'

app.directive('userAds', function(){
	// Runs during compile
	return {
		controller: 'UserAdsController',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/displayUserAds.html',
		replace: true,
	};
});