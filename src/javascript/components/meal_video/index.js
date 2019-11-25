import m from "mustache";
import template from "./template.html";
import "./index.css";

class MealVideo {
  constructor(props) {
    this.props = {
      picture: "",
      ...props
    };
  }

  render($container) {
    $container.innerHTML = m.render(template, this.props);
  }
}

export default MealVideo;
