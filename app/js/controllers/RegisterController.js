'use strict'

app.controller('RegisterController', ['$scope', '$rootScope', '$location', 'authorization', 'getTowns', 'notifications', function($scope, $rootScope, $location, authorization, getTowns, notifications) {
  $scope.credentials = {
    username: '',
    password: ''
  };

  // get All towns
  getTowns.getAllTowns().then(function(data) {
    $scope.townsData = data;
  })

  $scope.register = function(credentials) {
    authorization.register(credentials).then(function(response) {
      $rootScope.$broadcast('registeredUser');
      notifications.registerSuccess();
      $scope.changeRoute('/');
    }, function(error) {
      notifications.registerFailed(error)
    });
  }
}])