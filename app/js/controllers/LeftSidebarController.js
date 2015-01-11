'use strict'

app.controller('LeftSidebarController', ['$scope', '$rootScope', '$location', 'sessionControl', 'notifications', function($scope, $rootScope, $location, authorization, sessionControl, notifications) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

    if (($location.path() === '/user/ads') ||
        ($location.path() === '/user/ads/') ||
        ($location.path() === '/user/ads/inactive') ||
        ($location.path() === '/user/ads/published') ||
        ($location.path() === '/user/ads/waitingapproval') ||
        ($location.path() === '/user/ads/rejected')
    ) {
        $scope.showUserAdsFilter = true;
    } else {
        $scope.showUserAdsFilter = false;
    }
}])