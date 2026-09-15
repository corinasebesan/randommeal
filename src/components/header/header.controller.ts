import app from "../../module";
import headerTemplate from "./header.tpl.html";

/**
 * The header: the random meal button and the search box.
 */
const HeaderController = function($scope, $location, mealService) {
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

/**
 * Explicit annotation. AngularJS works out dependencies by reading parameter
 * names, and a minifier renames them to single letters, so an un-annotated
 * controller throws $injector:unpr in a production build. This code never hit
 * that before because the bundle was never successfully built.
 */
HeaderController.$inject = ["$scope", "$location", "mealService"];

app.controller("HeaderController", HeaderController);

/**
 * The header was pulled in with ng-include, which fetched the template over the
 * network. It is a component now, with its template compiled into the bundle.
 */
app.component("appHeader", { template: headerTemplate });
