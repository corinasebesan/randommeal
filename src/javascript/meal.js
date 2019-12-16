(function() {
  var meal = function() {
    var getMeal = function(
      title,
      thumnailUrl,
      category,
      instructions,
      youtubeUrl,
      ingredients,
      tagsString
    ) {
      this.title = title;
      this.thumnailUrl = thumnailUrl;
      this.category = category;
      this.instructions = instructions;
      this.youtubeUrl = youtubeUrl.replace("watch?v=", "embed/");
      this.ingredients = ingredients;
      this.tagsString =
        tagsString && tagsString.length > 0
          ? tagsString.split(",").map(function(e) {
              return e.toLowerCase();
            })
          : [];
    };
    return {
      getMeal: getMeal
    };
  };
  var app = angular.module("mealViewer");
  module.factory("meal", meal);
})();

/*class Meal {
  constructor(
    title,
    thumnailUrl,
    category,
    instructions,
    youtubeUrl,
    ingredients,
    tagsString
  ) {
    this.title = title;
    this.thumnailUrl = thumnailUrl;
    this.category = category;
    this.instructions = instructions;
    this.youtubeUrl = youtubeUrl.replace("watch?v=", "embed/");
    this.ingredients = ingredients;
    this.tagsString =
      tagsString && tagsString.length > 0
        ? tagsString.split(",").map(e => e.toLowerCase())
        : [];
  }
}

export default Meal;*/
