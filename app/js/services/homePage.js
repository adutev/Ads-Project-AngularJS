 app.factory('mainData', function($http, $log, baseUrl) {
 	return {
 		getAllAds: function(success) {
 			$http({
 					method: 'GET',
 					url: baseUrl + 'ads'
 				})
 				.success(function(data, status, headers, config) {
 					success(data);
 				})
 				.error(function(data, status, headers, config) {
 					$log.warn(data);
 				});
 		},
 		getAllTowns: function(success) {
 			$http({
 					method: 'GET',
 					url: baseUrl + 'towns'
 				})
 				.success(function(data, status, headers, config) {
 					success(data);
 				})
 				.error(function(data, status, headers, config) {
 					$log.warn(data);
 				});
 		},
 		getAllCategories: function(success) {
 			$http({
 					method: 'GET',
 					url: baseUrl + 'categories'
 				})
 				.success(function(data, status, headers, config) {
 					success(data);
 				})
 				.error(function(data, status, headers, config) {
 					$log.warn(data);
 				});
 		},
 	};
 })