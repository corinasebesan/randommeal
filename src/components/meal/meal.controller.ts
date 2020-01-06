module app.meal {
  var MealController = function(mealService, $routeParams, $sce) {
    var ctrl = this;
    ctrl.$onInit = function() {
      ctrl.mealName = $routeParams.mealName;
      mealService.getSearchedMeal(ctrl.mealName).then(mealDataProcessing);
    };
    /**
     * It does the preprocessing of the received meal data
     * @param data The meal data
     */
    var mealDataProcessing = function(data: object) {
      ctrl.meal = data;

      // Embeddes the video link
      ctrl.meal.strYoutube = $sce.trustAsResourceUrl(
        ctrl.meal.strYoutube.replace("watch?v=", "embed/")
      );
      ctrl.meal.strMealThumb = $sce.trustAsResourceUrl(ctrl.meal.strMealThumb);

      // It maps an array with all the names of the ingredients
      var names = Object.keys(ctrl.meal)
        .filter(function(k) {
          return k.indexOf("strIngredient") > -1;
        })
        .map(function(k) {
          return ctrl.meal[k];
        })
        .filter(function(k) {
          return k && k !== "";
        });

      // It maps an array with all the measurements of the ingredients
      var measurements = Object.keys(ctrl.meal)
        .filter(function(k) {
          return k.indexOf("strMeasure") > -1;
        })
        .map(function(k) {
          return ctrl.meal[k];
        })
        .filter(function(k) {
          return k && k !== "";
        });

      // It creates an array of objects that are formed of the ingredient name and its associated measurement
      ctrl.ingredients = new Array(names.length);
      for (var i = 0; i < ctrl.ingredients.length; i++) {
        ctrl.ingredients[i] = {
          name: names[i],
          measurement: measurements[i]
        };
      }
    };
  };
  angular.module("mealViewer").controller("MealController", MealController);
}
