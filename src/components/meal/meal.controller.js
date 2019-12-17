(function() {
  var app = angular.module("mealViewer");

  var MealController = function($scope, mealService, $routeParams) {
    /**
     * It does the preprocessing of the received meal data
     * @param data The meal data
     */
    var mealDataProcessing = function(data) {
      $scope.meal = data;

      /**
       * Embeddes the video link
       */
      $scope.meal.strYoutube = $scope.meal.strYoutube.replace(
        "watch?v=",
        "embed/"
      );

      /**
       * It maps an array with all the names of the ingredients
       */
      var names = Object.keys($scope.meal)
        .filter(function(k) {
          return k.indexOf("strIngredient") > -1;
        })
        .map(function(k) {
          return $scope.meal[k];
        })
        .filter(function(k) {
          return k && k !== "";
        });

      /**
       * It maps an array with all the measurements of the ingredients
       */
      var measurements = Object.keys($scope.meal)
        .filter(function(k) {
          return k.indexOf("strMeasure") > -1;
        })
        .map(function(k) {
          return $scope.meal[k];
        })
        .filter(function(k) {
          return k && k !== "";
        });

      /**
       * It creates an array of objects that are formed of the ingredient name and its associated measurement
       */

      $scope.ingredients = new Array(names.length);
      for (var i = 0; i < $scope.ingredients.length; i++) {
        $scope.ingredients[i] = {
          name: names[i],
          measurement: measurements[i]
        };
      }
    };

    $scope.mealName = $routeParams.mealName;
    mealService.getSearchedMeal($scope.mealName).then(mealDataProcessing);

    /**
     * It loads the modal that contains the video
     */
    $scope.loadVideoModal = function() {
      var modal = document.getElementById("myModal");
      var video = document.getElementById("videoIframe");

      modal.style.display = "flex";
      video.src = $scope.meal.strYoutube;
    };

    /**
     * It closes the modal that contains the video
     */
    $scope.closeVideoModal = function() {
      var modal = document.getElementById("myModal");
      var video = document.getElementById("videoIframe");

      modal.style.display = "none";
      video.src = "";
    };
  };
  app.controller("MealController", MealController);
})();
