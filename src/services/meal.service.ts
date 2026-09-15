import app from "../module";

const mealService = function($http) {
  /**
   * It calls the api to get a random meal
   */
  const getRandomMeal = function() {
    return $http
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(function(response) {
        return response.data.meals[0];
      });
  };

  /**
   * It calls the api to get a searched meal
   */
  const getSearchedMeal = function(mealName: String) {
    return $http
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          encodeURIComponent(mealName as string)
      )
      .then(function(response) {
        return response.data.meals[0];
      });
  };

  return {
    getRandomMeal: getRandomMeal,
    getSearchedMeal: getSearchedMeal
  };
};

mealService.$inject = ["$http"];

app.factory("mealService", mealService);
