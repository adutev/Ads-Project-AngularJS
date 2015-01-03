app.factory('adsData', function($http, $log, $q, baseUrl) {
    function getAllAds(pageNumber, townId, categoryId) {
        var deferred = $q.defer();

        $http({
                method: 'GET',
                url: baseUrl + '/ads?pagesize=4&startpage=' + pageNumber + '&TownId=' + townId + '&CategoryId=' + categoryId
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
        getAllAds: getAllAds
    };
})