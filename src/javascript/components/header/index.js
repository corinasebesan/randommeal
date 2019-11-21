import m from "mustache";
import template from "./template.html";
import "./index.css";

class Header {
  constructor(props) {
    this.props = {
      title: "Feeling hungry ?",
      subtitle: "Get a random meal by clicking the button",
      ...props
    };
  }

  render($container) {
    $container.innerHTML = m.render(template, this.props);
  }
}

export default Header;
