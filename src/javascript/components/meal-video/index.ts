import * as m from "mustache";
import template from "./template.html";
import "./index.css";

class MealVideo {
  props: { picture: string; onClick: () => void };
  constructor() {
    this.props = {
      picture: "",
      onClick: () => true,
      ...this.props
    };
  }

  render({ picture = "" } = {}): string {
    const html: string = m.render(template, { picture });
    return html;
  }
  addEvents(
    meal: import("../../../../../mealGen/src/javascript/meal").default
  ): void {
    var mod: HTMLDivElement = document.getElementById(
      "myModal"
    ) as HTMLDivElement;
    var vid: HTMLIFrameElement = document.getElementById(
      "vi"
    ) as HTMLIFrameElement;
    var bPlay: HTMLButtonElement = document.getElementById(
      "btn2"
    ) as HTMLButtonElement;
    var bClose: HTMLButtonElement = document.getElementsByClassName(
      "modal__btn-close"
    )[0] as HTMLButtonElement;
    bPlay.addEventListener("click", () => {
      this.props.onClick();
      mod.style.display = "flex";
      vid.src = meal.video;
    });
    bClose.onclick = function(): void {
      mod.style.display = "none";
      vid.src = "";
    };
    window.onclick = function(event: Event): void {
      if (event.target == document.getElementById("myModal")) {
        mod.style.display = "none";
        vid.src = "";
      }
    };
  }
}

export default MealVideo;
