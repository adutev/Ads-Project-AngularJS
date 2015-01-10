app.factory('notifications', ['growl', function(growl) {
    function loginSuccess() {
        growl.success("Login success.");
    }

    function loginFailed(error) {
        growl.error(error.error_description);
    }

    function registerSuccess() {
        growl.success("Register success.");
    }

    function registerFailed(error) {
        for (var i in error.modelState[""]) {
            growl.error(error.modelState[""][i]);
        }
    }

    function logoutSuccess() {
        growl.success("Logout success.");
    }

    function adSuccessfullyPublished() {
        growl.success("Advertisement submitted for approval. Once approved, it will be published.");
    }

    function adPublishError(error) {
        growl.error(error);
    }

    function adSuccessfullyDeactivated() {
        growl.success("Ad deactivation success.");
    }

    function adDeactivationError(error) {
        growl.error(error);
    }

    function adSuccessfullyPublished() {
        growl.success("Advertisement submitted for approval. Once approved, it will be published.");
    }

    function adDeleted() {
        growl.success("Ad deleted.");
    }

    function adDeleteError(error) {
        growl.error(error);
    }
    
    return {
        loginSuccess: loginSuccess,
        loginFailed: loginFailed,
        logoutSuccess: logoutSuccess,
        registerSuccess: registerSuccess,
        registerFailed: registerFailed,
        adSuccessfullyPublished: adSuccessfullyPublished,
        adPublishError: adPublishError,
        adSuccessfullyDeactivated: adSuccessfullyDeactivated,
        adDeactivationError: adDeactivationError,
        adSuccessfullyPublished: adSuccessfullyPublished,
        adDeleted: adDeleted,
        adDeleteError: adDeleteError
    };
}])