adsApp.controller('MainController', function($scope, $location) {
	$scope.changeView = function(path) {
		$location.path(path);
	};
})