app.factory('sessionControl', ['$window', function($window) {
	var userData;

	function saveCurrentSession(data) {
		userData = {
			username: data.username,
			accessToken: data.access_token,
			isAdmin: data.isAdmin
		}
		$window.sessionStorage['userData'] = JSON.stringify(userData);
	}

	function getCurrentUser() {
		var userData = sessionStorage['userData'];
		if (userData) {
			return JSON.parse(sessionStorage['userData']);
		}
	}


	function getUsername() {
		var userData = sessionStorage['userData'];
		if (userData) {
			var data = JSON.parse(sessionStorage['userData']);
			return data.username;
		}
	}

	function getAccessToken() {
		var userData = sessionStorage['userData'];
		if (userData) {
			var data = JSON.parse(sessionStorage['userData']);
			return data.accessToken;
		}
	}

	function isAdmin() {
		var userData = sessionStorage['userData'];
		if (userData) {
			var data = JSON.parse(sessionStorage['userData']);
			if(data.isAdmin) {
				return true;
			} else {
				return false;
			}
		}
	}

	function isLogged () {
		var userData = sessionStorage['userData'];
		if (userData) {
			return true;
		} else {
			return false;
		}
	}

	function deleteSession () {
		delete sessionStorage['userData'];
	}

	return {
		saveCurrentSession: saveCurrentSession,
		getCurrentUser: getCurrentUser,
		getUsername: getUsername,
		getAccessToken: getAccessToken,
		isAdmin: isAdmin,
		isLogged: isLogged,
		deleteSession: deleteSession
	};
}])