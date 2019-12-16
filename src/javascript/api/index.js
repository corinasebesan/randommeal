(function() {
  var app = angular.module("mealViewer", []);

  var MainController = function($scope, $http, meal, ingredients) {
    $scope.loadMeal = function() {
      var onMealComplete = function(response) {
        $scope.meals = response.data;
      };

      $http
        .get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(onMealComplete);

      var names = Object.keys($scope.meals[0])
        .filter(function(k) {
          return k.indexOf("strIngredient") > -1;
        })
        .map(function(k) {
          return $scope.meals[0][k];
        })
        .filter(function(k) {
          return v && v !== "";
        });

      var measurements = Object.keys($scope.meals[0])
        .filter(function(k) {
          return k.indexOf("strMeasure") > -1;
        })
        .map(function(k) {
          return $scope.meals[0][k];
        })
        .filter(function(k) {
          return v && v !== "";
        });
      var ingredientss = new Array(names.length);
      for (var i = 0; i < ingredientss.length; i++) {
        ingredientss[i] = ingredients.getIngredient(names[i], measurements[i]);
      }
      $scope.meal = meal.getMeal(
        $scope.meals[0].strMeal,
        $scope.meals[0].strMealThumb,
        $scope.meals[0].strCategory,
        $scope.meals[0].strInstructions,
        $scope.meals[0].strYoutube,
        ingredientss,
        $scope.meals[0].strTags
      );
    };
  };

  app.controller("MainController", MainController);
})();
