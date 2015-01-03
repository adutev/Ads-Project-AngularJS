app.controller('LoginController', function($scope, $location, $rootScope, AUTH_EVENTS, authServices, storeSession) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    $scope.login = function(credentials) {
        authServices.login(credentials).then(function(user) {
            storeSession.saveCurrentSession(user);
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $scope.changeView('/');
            noty({
                text: 'Happy!',
                layout: 'topCenter',
                type: 'success'
            });
        }, function() {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
})