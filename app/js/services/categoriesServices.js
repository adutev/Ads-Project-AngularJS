app.factory('categoriesData', function($http, $log, baseUrl){
	return {
		getAllCategories: function (success) {
			$http({method: 'GET', url: baseUrl + 'categories'})
			.success(function (data, status, headers, config) {
				success(data);
			})
			.error(function(data, status, headers, config) {
				$log.warn(data);
			});
		},
	};
})