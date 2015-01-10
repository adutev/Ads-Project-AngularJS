app.factory('getTowns', function($http, $log, $q, BASE_URL) {
    function getAllTowns() {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: BASE_URL + '/Towns'
            })
            .success(function(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });

        return deferred.promise;
    }

    return {
        getAllTowns: getAllTowns
    };
})