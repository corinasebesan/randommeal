import * as m from "mustache";

import template from "./template.html";
import Meal from "../../meal";
import "./index.css";

class MealDescription {
  constructor() {}

  render(meal) {
    const html = m.render(template, meal);
    return html;
  }
}

export default MealDescription;
