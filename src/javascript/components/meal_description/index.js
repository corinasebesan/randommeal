import m from "mustache";
import template from "./template.html";
import "./index.css";

class MealDescription {
  constructor(props) {
    this.props = {
      title: "",
      category: "",
      tags: "",
      instructions: "",
      ingredients: "",
      ...props
    };
  }

  render($container) {
    $container.innerHTML = m.render(template, this.props);
  }
}

export default MealDescription;
