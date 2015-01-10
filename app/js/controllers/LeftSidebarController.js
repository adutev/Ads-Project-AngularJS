'use strict'

app.controller('LeftSidebarController', ['$scope', '$rootScope', '$location', 'sessionControl', 'notifications', function($scope, $rootScope, $location, authorization, sessionControl, notifications){
	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.showUserAdsFilter = $scope.isActive('/userAds');

    $scope.showAllAds = function() {
    	// body...
    }

    $scope.showPublished = function() {
    	// body...
    }

    $scope.showWaitingApproval = function() {
    	// body...
    }

    $scope.showInactive = function() {
    	// body...
    }

    $scope.showRejected = function() {
    	// body...
    }
}])

