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

  render({ picture, url } = {}) {
    const html = m.render(template, { picture, url });
    return html;
  }
}

export default MealVideo;
