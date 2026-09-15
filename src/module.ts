/**
 * The Angular module, on its own so that importing it is what guarantees it
 * exists before anything tries to register against it.
 */
export default angular.module("mealViewer", ["ngRoute"]);
