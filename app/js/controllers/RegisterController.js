'use strict'

app.controller('RegisterController', ['$scope', '$rootScope', '$location', 'authorization', 'getTowns', function($scope, $rootScope, $location, authorization, getTowns) {
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
      console.log(response)
      $rootScope.$broadcast('registeredUser');
      $scope.changeRoute('/');
      noty({
        layout: 'top',
        type: 'warning',
        text: 'Super warning message everybody run!',
        dismissQueue: true, 
        animation: {
          open: {height: 'toggle'},
          close: {height: 'toggle'},
          easing: 'swing',
          speed: 500 
          },
        timeout: 0
        });     
    }, function(error) {
      $rootScope.$broadcast('registeredFailed', error);
    });
  }

  $rootScope.$on("registeredFailed", function(event, data) {
    for (var i in data.modelState[""]) {
      console.log(data.modelState[""][i]);

    }
  });
}])