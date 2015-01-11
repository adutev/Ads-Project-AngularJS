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

	function getUserAds(pageNumber, adStatus) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		var status = adStatus || '';
		$http({
				method: 'GET',
				url: BASE_URL + '/user/ads?pagesize=5&startpage=' + pageNumber + '&status=' + adStatus,
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

	function getUserAdById(id) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		$http({
				method: 'GET',
				url: BASE_URL + '/user/ads/' + id,
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

	function deleteAd(id) {
		var deferred = $q.defer();
		var headers = {
			'Authorization': 'Bearer ' + sessionControl.getAccessToken()
		};

		$http({
				method: 'DELETE',
				url: BASE_URL + '/user/ads/' + id,
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
		getUserAdById: getUserAdById,
		deactivateAd: deactivateAd,
		publishAgain: publishAgain,
		deleteAd: deleteAd
	}


}])