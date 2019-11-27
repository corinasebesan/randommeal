import m from "mustache";
import template from "./template.html";
import "./index.css";

class MealVideo {
  constructor(props) {
    this.props = {
      picture: "",
      onClick: () => true,
      ...props
    };
  }

  render({ picture } = {}) {
    const html = m.render(template, { picture });
    return html;
  }
  addEvents(meal) {
    var mod = document.getElementById("myModal");
    var vid = document.getElementById("vi");
    document.getElementById("btn2").addEventListener("click", () => {
      this.props.onClick();
      mod.style.display = "flex";
      vid.src = meal.video;
    });
    document.getElementsByClassName(
      "modal__btn-close"
    )[0].onclick = function() {
      mod.style.display = "none";
      vid.src = "";
    };
    window.onclick = function(event) {
      if (event.target == document.getElementById("myModal")) {
        mod.style.display = "none";
        vid.src = "";
      }
    };
  }
}

export default MealVideo;
