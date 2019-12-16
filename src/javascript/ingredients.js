(function() {
  var ingredients = function() {
    var getIngredient = function(name, measurement) {
      this.name = name;
      this.measurement = measurement;
    };
    return {
      getIngredient: getIngredient
    };
  };
  var app = angular.module("mealViewer");
  module.factory("ingredients", ingredients);
})();
