import m from "mustache";
import template from "./template.html";
import "./index.css";

class Header {
  constructor(props) {
    this.props = {
      title: "Feeling hungry ?",
      subtitle: "Get a random meal by clicking the button",
      onClick: () => true,
      ...props
    };
  }

  render() {
    const html = m.render(template, { ...this.props });
    return html;
  }

  addEvents() {
    document.getElementById("btn1").addEventListener("click", () => {
      this.props.onClick();
    });
  }
}

export default Header;
