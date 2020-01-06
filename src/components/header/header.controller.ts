module app.header {
  var HeaderController = function($scope, $location, mealService) {
    /**
     * Gets a random meal
     */
    $scope.getRandomMeal = function() {
      mealService.getRandomMeal().then(function(data: object) {
        $scope.meal = data;
        $location.path("/meal/" + $scope.meal.strMeal);
      });
    };

    /**
     * Gets a meal searched by name
     */
    $scope.search = function(mealName: String) {
      $location.path("/meal/" + mealName);
    };
  };
  angular.module("mealViewer").controller("HeaderController", HeaderController);
}
