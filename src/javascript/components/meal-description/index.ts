import * as m from "mustache";

import template from "./template.html";
import Meal from "../../meal";
import "./index.css";

class MealDescription {
  constructor() {}

  render(meal: Meal): string {
    const html: string = m.render(template, meal);
    return html;
  }
}

export default MealDescription;
