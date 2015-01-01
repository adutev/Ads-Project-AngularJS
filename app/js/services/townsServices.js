app.factory('townsData', function($http, $log, baseUrl){
	return {
		getAllTowns: function (success) {
			$http({method: 'GET',  url: baseUrl + 'towns'})
			.success(function (data, status, headers, config) {
				success(data);
			})
			.error(function(data, status, headers, config) {
				$log.warn(data);
			});
		}
	};
})