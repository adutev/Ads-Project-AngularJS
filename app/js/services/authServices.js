app.factory('authServices', function($http, $q, baseUrl) {
	function login(credentials) {
		var deferred = $q.defer();

		$http({
				method: 'POST',
				url: baseUrl + '/user/login',
				data: credentials
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
		login: login
	};
})