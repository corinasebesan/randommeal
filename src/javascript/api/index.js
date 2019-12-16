import Meal from "../meal";
import Ingredient from "../ingredients";

(function() {
  var app = angular.module("mealViewer", []);

  var MainController = function($scope, $http) {
    var onMealComplete = function(response) {
      $scope.meals = response.data;
    };

    $http
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(onMealComplete);

    const names = Object.keys($scope.meals[0])
      .filter(k => k.indexOf("strIngredient") > -1)
      .map(k => $scope.meals[0][k])
      .filter(v => v && v !== "");

    const measurements = Object.keys($scope.meals[0])
      .filter(k => k.indexOf("strMeasure") > -1)
      .map(k => $scope.meals[0][k])
      .filter(v => v && v !== "");
    var ingredients = new Array(names.length);
    for (let i = 0; i < ingredients.length; i++) {
      ingredients[i] = new Ingredient(names[i], measurements[i]);
    }

    return new Meal(
      $scope.meals[0].strMeal,
      $scope.meals[0].strMealThumb,
      $scope.meals[0].strCategory,
      $scope.meals[0].strInstructions,
      $scope.meals[0].strYoutube,
      ingredients,
      $scope.meals[0].strTags
    );
  };

  app.controller("MainController", MainController);
})();

/*const getMeal = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  const resp = await fetch(url);
  const res = await resp.json();

  const names = Object.keys(res.meals[0])
    .filter(k => k.indexOf("strIngredient") > -1)
    .map(k => res.meals[0][k])
    .filter(v => v && v !== "");

  const measurements = Object.keys(res.meals[0])
    .filter(k => k.indexOf("strMeasure") > -1)
    .map(k => res.meals[0][k])
    .filter(v => v && v !== "");
  var ingredients = new Array(names.length);
  for (let i = 0; i < ingredients.length; i++) {
    ingredients[i] = new Ingredient(names[i], measurements[i]);
  }

  return new Meal(
    res.meals[0].strMeal,
    res.meals[0].strMealThumb,
    res.meals[0].strCategory,
    res.meals[0].strInstructions,
    res.meals[0].strYoutube,
    ingredients,
    res.meals[0].strTags
  );
};

export default {
  getMeal
};*/
