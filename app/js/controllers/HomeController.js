'use strict'

app.controller('HomeController', ['$scope', '$http', 'getAds', 'getCategories', 'getTowns', 'sessionControl', function($scope, $http, getAds, getCategories, getTowns, sessionControl) {
	$scope.ready = false;
	$scope.townFilter = "Town";
	$scope.categoryFilter = "Category";

	var currentCategoryId = '',
		currentTownId = '',
		currentPage = 1;


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
			$scope.ready = true;
			$scope.totalAds = parseInt(data.numPages) * 5;
			currentPage = pageNumber;
		}, function(error) {
			console.log(error);
		});
	}


	getCategories.getAllCategories().then(function(data) {
		$scope.categoriesData = data;
	}, function(error) {
		console.log(error);
	});


	$scope.filterByCategory = function(categoryId, cateogryName) {
		getAds.getByCategory(categoryId, currentTownId, currentPage).then(function(data) {
			$scope.adsData = data;
			$scope.totalAds = parseInt(data.numPages) * 5;
			$scope.categoryFilter = cateogryName;
			currentCategoryId = categoryId;
		}, function(error) {
			console.log(error);
		});
	};


	getTowns.getAllTowns().then(function(data) {
		$scope.townsData = data;
	}, function(error) {
		console.log(error);
	});


	$scope.filterByTown = function(townId, townName) {
		getAds.getByTown(townId, currentCategoryId, currentPage).then(function(data) {
			$scope.adsData = data;
			$scope.totalAds = parseInt(data.numPages) * 5;
			$scope.townFilter = townName;
			currentTownId = townId;
		}, function(error) {
			console.log(error);
		});
	};
}]);