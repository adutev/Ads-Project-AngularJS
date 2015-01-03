app.controller('HomePageController', function($scope, $location, adsData, townsData, categoriesData) {
    $scope.townFilter = "Town";
    $scope.categoryFilter = "Category";

    var currentCategoryId = '',
        currentTownId = '',
        currentPage = 1;

    /* pagination */
    $scope.totalAds = 0;
    $scope.adsPerPage = 4;
    getResultsPage(1);

    $scope.pagination = {
        current: 1
    };

    $scope.pageChanged = function(newPage) {
        getResultsPage(newPage);
    };

    function getResultsPage(pageNumber) {
        adsData.getAllAds(pageNumber, currentTownId, currentCategoryId).then(function(data) {
            $scope.adsData = data;
            $scope.totalAds = parseInt(data.numPages) * 4;
            currentPage = pageNumber;
        }, function(error) {
            console.log(error);
        });
    }

    townsData.getAllTowns(function(resp) {
        $scope.towns = resp;
    });
    categoriesData.getAllCategories(function(resp) {
        $scope.categories = resp;
    });

    
})