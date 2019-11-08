(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _meal = _interopRequireDefault(require("./meal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "getMeal",
    value: function getMeal() {
      var url = "https://www.themealdb.com/api/json/v1/1/random.php";
      return fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (res) {
        var data = res.meals[0];
        return new _meal["default"](data);
      });
    }
  }, {
    key: "showMeal",
    value: function showMeal(meal) {
      var pic = document.getElementById("ima");
      var title = document.getElementById("title");
      var category = document.getElementById("category");
      var instructions = document.getElementById("instructions");
      var tags = document.getElementById("tags");
      var ingredients = document.getElementById("ingredients");
      var modal = document.getElementById("myModal");
      var span = document.getElementsByClassName("close")[0];
      var vid = document.getElementById("vi");
      pic.src = meal.picture;
      title.innerHTML = meal.title;
      category.innerHTML = "<b>Category:</b> ".concat(meal.category);
      instructions.innerHTML = meal.instructions;
      tags.innerHTML = "<b>Tags:</b> ".concat(meal.tags.map(function (e) {
        return e;
      }).join(", "));
      ingredients.innerHTML = meal.ingredients().map(function (ingredient) {
        return "<li><b>".concat(ingredient.name, "</b> - <em>").concat(ingredient.measurement, "</em></li>");
      }).join("");

      document.getElementById("btn2").onclick = function () {
        modal.style.display = "block";
        vid.src = meal.video;
      };

      span.onclick = function () {
        modal.style.display = "none";
      };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      this.getMeal().then(function (meal) {
        return _this.showMeal(meal);
      });

      document.getElementById("btn1").onclick = function () {
        _this.getMeal().then(function (meal) {
          return _this.showMeal(meal);
        });
      };
    }
  }]);

  return App;
}();

var _default = App;
exports["default"] = _default;
},{"./meal.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Meal =
/*#__PURE__*/
function () {
  function Meal(data) {
    _classCallCheck(this, Meal);

    this.title = data.strMeal;
    this.picture = data.strMealThumb;
    this.category = data.strCategory;
    this.tags = data.strTags ? data.strTags.split(",").map(function (e) {
      return e.toLowerCase();
    }) : [];
    this.instructions = data.strInstructions;
    this.data = data;
    this.video = data.strYoutube.replace("watch?v=", "embed/");
  }

  _createClass(Meal, [{
    key: "ingredients",
    value: function ingredients() {
      var _this = this;

      var names = Object.keys(this.data).filter(function (k) {
        return k.indexOf("strIngredient") > -1;
      }).map(function (k) {
        return _this.data[k];
      }).filter(function (v) {
        return v && v !== "";
      });
      var measurements = Object.keys(this.data).filter(function (k) {
        return k.indexOf("strMeasure") > -1;
      }).map(function (k) {
        return _this.data[k];
      }).filter(function (v) {
        return v && v !== "";
      });
      return names.map(function (name, idx) {
        return {
          name: name,
          measurement: measurements[idx]
        };
      });
    }
  }]);

  return Meal;
}();

var _default = Meal;
exports["default"] = _default;
},{}]},{},[1]);
