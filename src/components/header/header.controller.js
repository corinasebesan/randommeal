(function() {
  var app = angular.module("mealViewer");

  var HeaderController = function($scope) {
    $scope.loadMeal = function() {};
  };
  app.controller("HeaderController", HeaderController);
})();
