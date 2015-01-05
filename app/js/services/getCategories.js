app.factory('getCategories', function($http, $log, $q, BASE_URL) {
    function getAllCategories() {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: BASE_URL + '/categories'
            })
            .success(function(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });

            console.log('getAllCategories called');
        return deferred.promise;
    }

    return {
        getAllCategories: getAllCategories
    };
})