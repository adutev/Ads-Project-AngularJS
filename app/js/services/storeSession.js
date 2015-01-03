app.factory('storeSession', function($window) {
	var userSession;
	var headers = {};

	function saveCurrentSession(data) {
		userSession = {
			username: data.username,
			access_token: data.access_token,
			isAdmin: data.isAdmin
		};
		$window.sessionStorage['currentSession'] = JSON.stringify(userSession)
	}

	return {
		saveCurrentSession: saveCurrentSession
	};
})