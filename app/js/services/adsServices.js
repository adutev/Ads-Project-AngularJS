app.factory('adsServices', ['$http', '$q', 'BASE_URL', 'sessionControl', function($http, $q, BASE_URL, sessionControl) {
	function createNewAd(ad) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		$http({
				method: 'POST',
				url: BASE_URL + '/user/ads',
				data: ad,
				headers: headers
			})
			.success(function(data, status, headers, config) {
				deferred.resolve(data, status, headers, config);
			})
			.error(function(data, status, headers, config) {
				deferred.reject(data, status, headers, config);
			});

		return deferred.promise;
	}

	function getUserAds(pageNumber) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		$http({
				method: 'GET',
				url: BASE_URL + '/user/ads?pagesize=5&startpage=' + pageNumber,
				headers: headers
			})
			.success(function(data, status, headers, config) {
				deferred.resolve(data, status, headers, config);
			})
			.error(function(data, status, headers, config) {
				deferred.reject(data, status, headers, config);
			});

		return deferred.promise;
	}
	function deactivateAd(id) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		$http({
				method: 'PUT',
				url: BASE_URL + '/user/ads/deactivate/' + id,
				headers: headers
			})
			.success(function(data, status, headers, config) {
				deferred.resolve(data, status, headers, config);
			})
			.error(function(data, status, headers, config) {
				deferred.reject(data, status, headers, config);
			});

		return deferred.promise;
	}

	function publishAgain(id) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		$http({
				method: 'PUT',
				url: BASE_URL + '/user/ads/publishagain/' + id,
				headers: headers
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
		createNewAd: createNewAd,
		getUserAds: getUserAds,
		deactivateAd: deactivateAd,
		publishAgain: publishAgain
	}


}])