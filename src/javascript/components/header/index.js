import "./index.css";
(function() {
  var app = angular.module("mealViewer");

  var HeaderController = function($scope) {
    var header = {
      title: "Feeling hungry ?",
      subtitle: "Get a random meal by clicking the button"
    };
    $scope.header = header;
  };
  app.controller("HeaderController", HeaderController);
})();
