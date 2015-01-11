'use strict'

app.controller('DeleteAdController', ['$scope', '$routeParams', 'adsServices', 'notifications', function($scope, $routeParams, adsServices, notifications) {
	var adId = $routeParams.id;
	console.log(adId)
	adsServices.getUserAdById(adId).then(function(data) {
			$scope.adData = data;
		}),
		function(error) {
			console.log(error);
		}

	$scope.deleteAd = function(adId) {
		console.log(adId);
		adsServices.deleteAd(adId).then(function() {
			notifications.adDeleted();
			$scope.changeRoute('/user/home');
		}, function(error) {
			notifications.adDeleteError(error);
		});
	}

}])