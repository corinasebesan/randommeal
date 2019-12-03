import * as m from "mustache";
import template from "./template.html";
import "./index.css";

class Header {
  props: { onClick: () => void; title: string; subtitle: string };
  constructor(props: { onClick: () => void }) {
    this.props = {
      title: "Feeling hungry ?",
      subtitle: "Get a random meal by clicking the button",
      onClick: () => true,
      ...props
    };
  }

  render(): string {
    const html: string = m.render(template, { ...this.props });
    return html;
  }

  addEvents(): void {
    document.getElementById("btn1").addEventListener("click", () => {
      this.props.onClick();
    });
  }
}

export default Header;
