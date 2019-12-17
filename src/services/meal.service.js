(function() {
  var mealService = function($http) {
    /**
     * It calls the api to get a random meal
     */
    var getRandomMeal = function() {
      return $http
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function(response) {
          return response.data.meals[0];
        });
    };

    /**
     * It calls the api to get a searched meal
     */
    var getSearchedMeal = function(mealName) {
      return $http
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName)
        .then(function(response) {
          return response.data.meals[0];
        });
    };
    return {
      getRandomMeal: getRandomMeal,
      getSearchedMeal: getSearchedMeal
    };
  };

  var module = angular.module("mealViewer");
  module.factory("mealService", mealService);
})();
