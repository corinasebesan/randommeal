import * as m from "mustache";
import template from "./template.html";
import "./index.css";

class MealVideo {
  props;
  constructor() {
    this.props = {
      picture: "",
      onClick: () => true,
      ...this.props
    };
  }

  render({ picture = "" } = {}) {
    const html = m.render(template, { picture });
    return html;
  }
  addEvents(meal) {
    var mod = document.getElementById("myModal");
    var vid = document.getElementById("vi");
    var bPlay = document.getElementById("btn2");
    var bClose = document.getElementsByClassName("modal__btn-close")[0];
    bPlay.addEventListener("click", () => {
      this.props.onClick();
      mod.style.display = "flex";
      vid.src = meal.youtubeUrl;
    });
    bClose.onclick = function() {
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
