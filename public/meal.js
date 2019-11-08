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