/**
 * Application entry point.
 *
 * Styles and templates are imported here so the bundler compiles them into the
 * single script the page loads. The route template in particular used to be a
 * templateUrl fetched at runtime; inlining it means the built page is one HTML
 * file and one script, with nothing else to serve.
 */
import "./css/vars.css";
import "./css/typography.css";
import "./css/button.css";
import "./css/index.css";
import "./components/header/header.css";
import "./components/meal/meal.css";
import "./components/imageVideo/imageVideo.css";

import app from "./module";
import mealTemplate from "./components/meal/meal.tpl.html";

import "./services/meal.service";
import "./components/header/header.controller";
import "./components/meal/meal.controller";
import "./components/imageVideo/imageVideo.component";

/**
 * This configuration block was committed commented out, which is why the app
 * never rendered a meal: ng-view had no route to fill it with.
 */
app.config([
  "$routeProvider",
  function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider
      // The landing page is the header on its own.
      .when("/", { template: "" })
      .when("/meal/:mealName", { template: mealTemplate })
      .otherwise({ redirectTo: "/" });
  }
]);
