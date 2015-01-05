'use strict'

app.controller('HomeController', ['$scope', '$http', 'getAds', 'getCategories', 'getTowns', 'sessionControl', function($scope, $http, getAds, getCategories, getTowns, sessionControl) {

	$scope.townFilter = "Town";
	$scope.categoryFilter = "Category";

	var currentCategoryId = '',
		currentTownId = '',
		currentPage = 1;

	/* pagination */
	$scope.totalAds = 0;
	$scope.adsPerPage = 5;
	getResultsPage(1);

	$scope.pagination = {
		current: 1
	};

	$scope.pageChanged = function(newPage) {
		getResultsPage(newPage);
	};

	function getResultsPage(pageNumber) {
		getAds.getAllAds(pageNumber, currentTownId, currentCategoryId).then(function(data) {
			$scope.adsData = data;
			$scope.totalAds = parseInt(data.numPages) * 5;
			currentPage = pageNumber;
		}, function(error) {
			//TODO proper user messsage
			console.log(error);
		});
	}

	/* get all categoreis */
	getCategories.getAllCategories().then(function(data) {
		$scope.categoriesData = data;
	}, function(error) {
		//TODO proper user messsage
		console.log(error);
	});

	/* filter ads by category */
	$scope.filterByCategory = function(categoryId, cateogryName) {
		getAds.getByCategory(categoryId, currentTownId, currentPage).then(function(data) {
			$scope.adsData = data;
			$scope.totalAds = parseInt(data.numPages) * 5;
			$scope.categoryFilter = cateogryName;
			currentCategoryId = categoryId;
		}, function(error) {
			//TODO proper user messsage
			console.log(error);
		});
	};

	/* get all towns*/
	getTowns.getAllTowns().then(function(data) {
		$scope.townsData = data;
	}, function(error) {
		//TODO proper user messsage
		console.log(error);
	});

	/* filter ads by town*/
	$scope.filterByTown = function(townId, townName) {
		getAds.getByTown(townId, currentCategoryId, currentPage).then(function(data) {
			$scope.adsData = data;
			$scope.totalAds = parseInt(data.numPages) * 5;
			$scope.townFilter = townName;
			currentTownId = townId;
		}, function(error) {
			//TODO proper user messsage
			console.log(error);
		});
	};
}]);