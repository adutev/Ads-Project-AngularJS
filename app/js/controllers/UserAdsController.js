'use strict'

app.controller('UserAdsController', ['$scope', '$http', '$route', '$routeParams', 'adsServices', 'sessionControl', 'notifications', function($scope, $http, $route, $routeParams, adsServices, sessionControl, notifications) {
	$scope.ready = false;
	
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
		var adStatus = $routeParams.status || '';
		adsServices.getUserAds(pageNumber, adStatus).then(function(data) {
			$scope.adsData = data;
			$scope.ready = true;
			$scope.totalAds = parseInt(data.numPages) * 5;
			currentPage = pageNumber;
		}, function(error) {
			console.log(error);
		});
	}

	$scope.deactivateAd = function(id) {
		adsServices.deactivateAd(id).then(function(data) {
			$route.reload();
			notifications.adSuccessfullyDeactivated();
		}, function(error) {
			notifications.adDeactivationError(error)
		});
	}

	$scope.publishAgain = function(id) {
		adsServices.publishAgain(id).then(function(data) {
			$route.reload();
			notifications.adSuccessfullyPublished();
		}, function(error) {
			notifications.adPublishError(error)
		});
	}

	$scope.deleteAd = function(id) {
		adsServices.deleteAd(id).then(function(data) {
			$route.reload();
			notifications.adDeleted();
		}, function(error) {
			notifications.adDeleteError(error)
		});
	}

}]);