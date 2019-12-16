import "./index.css";

(function() {
  var app = angular.module("mealViewer");

  var MealDetailsController = function($scope) {
    $scope.loadVideo = function() {
      var mod = document.getElementById("myModal");
      var vid = document.getElementById("vi");
      var bPlay = document.getElementById("btn2");
      var bClose = document.getElementsByClassName("modal__btn-close")[0];
      bPlay.addEventListener("click", function() {
        this.props.onClick();
        mod.style.display = "flex";
        vid.src = meal.youtubeUrl;
      });
      bClose.onclick = function() {
        mod.style.display = "none";
        vid.src = "";
      };
      window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
          mod.style.display = "none";
          vid.src = "";
        }
      };
    };
  };
  app.controller("MealDetailsController", MealDetailsController);
})();
