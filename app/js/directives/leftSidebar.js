'use strict'

app.directive('leftSidebar', function(){
	// Runs during compile
	return {
		controller: 'LeftSidebarController',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'partials/leftSidebar.html',
		replace: true,
	};
});