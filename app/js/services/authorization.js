app.factory('authorization', ['$http', '$q', 'BASE_URL', 'sessionControl', function($http, $q, BASE_URL, sessionControl) {
	function login(credentials) {
		var deferred = $q.defer();

		$http({
				method: 'POST',
				url: BASE_URL + '/user/login',
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

	function logout(credentials) {
		var deferred = $q.defer();
		var token = sessionControl.getAccessToken();
		$http({
				method: 'POST',
				url: BASE_URL + '/user/logout',
				headers: {
					"Authorization": "Bearer " + token
				}
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
		login: login,
		logout: logout
	};
}])
