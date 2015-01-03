app.controller('MainController', function($scope, $location) {
	// Looks after changing the views
	$scope.changeView = function(path) {
		$location.path(path);
	};
})