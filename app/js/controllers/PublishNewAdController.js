'use strict'

app.controller('PublishNewAdController', ['$scope', 'getTowns', 'getCategories', 'adsServices' ,'notifications', function($scope, getTowns, getCategories, adsServices, notifications) {

	getCategories.getAllCategories().then(function(data) {
		$scope.categoriesData = data;
	}, function(error) {
		console.log(error);
	});

	getTowns.getAllTowns().then(function(data) {
		$scope.townsData = data;
	}, function(error) {
		console.log(error);
	});


	$scope.ad = {
		townId: null,
		categoryId: null
	};

	$scope.fileSelected = function(fileInputField) {
		delete $scope.ad.imageDataUrl;
		var file = fileInputField.files[0];
		if (file.type.match(/image\/.*/)) {
			var reader = new FileReader();
			reader.onload = function() {
				$scope.ad.imageDataUrl = reader.result;
				$(".image-box").html("<img src='" + reader.result + "'>");
			};
			reader.readAsDataURL(file);
		} else {
			$(".image-box").html("<p>File type not supported!</p>");
		}
	};

	$scope.publishAd = function(ad) {
		 adsServices.createNewAd(ad).then(function() {
           	notifications.adSuccessfullyPublished();				
			$scope.changeRoute('/user/home');
        }, function(error) {
           notifications.adPublishError(error);
        });
	}
}])