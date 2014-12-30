app.controller('MainController', function($scope, $location, mainData) {
	$scope.changeView = function(path) {
		$location.path(path);
	};

	mainData.getAllAds(function(resp) {
		$scope.data = resp;
	});
	mainData.getAllTowns(function(resp) {
		$scope.towns = resp;
	});
	mainData.getAllCategories(function(resp) {
		$scope.categories = resp;
	})
})