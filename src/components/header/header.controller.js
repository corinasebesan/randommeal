(function() {
  var app = angular.module("mealViewer");

  var HeaderController = function($scope, $location, mealService) {
    /**
     * Gets a random meal
     */
    $scope.getRandomMeal = function() {
      mealService.getRandomMeal().then(function(data) {
        $scope.meal = data;
        $location.path("/meal/" + $scope.meal.strMeal);
      });
    };

    /**
     * Gets a meal searched by name
     */
    $scope.search = function(mealName) {
      $location.path("/meal/" + mealName);
    };
  };
  app.controller("HeaderController", HeaderController);
})();
