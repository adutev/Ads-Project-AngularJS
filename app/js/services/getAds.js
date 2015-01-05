app.factory('getAds', function($http, $log, $q, BASE_URL) {
    function getAllAds(pageNumber, townId, categoryId) {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: BASE_URL + '/ads?pagesize=5&startpage=' + pageNumber + '&TownId=' + townId + '&CategoryId=' + categoryId
            })
            .success(function(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });

        console.log('getAllAds called');
        return deferred.promise;
    }

    function getByCategory(categoryId, townId, pageNumber) {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: BASE_URL + '/ads?pagesize=5&CategoryId=' + categoryId + '&TownId=' + townId + '&startpage=' + pageNumber
            })
            .success(function(data, status, headers, config) {
                deferred.resolve(data, status, headers, config);
            })
            .error(function(data, status, headers, config) {
                deferred.reject(data, status, headers, config);
            });

        return deferred.promise;
    }

    function getByTown(categoryId, townId, pageNumber) {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: BASE_URL + '/ads?pagesize=5&CategoryId=' + categoryId + '&TownId=' + townId + '&startpage=' + pageNumber
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
        getAllAds: getAllAds,
        getByCategory: getByCategory,
        getByTown: getByTown
    };
})