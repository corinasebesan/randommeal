import m from "mustache";
import Header from "../header";
import Description from "../meal-description";
import Video from "../meal-video";
import template from "./template.html";
import api from "../../api";

class App {
  constructor($container) {
    this.header = new Header({
      onClick: () => {
        this.requestMeal();
      }
    });
    this.description = new Description();
    this.video = new Video();
    this.$container = $container;
  }

  requestMeal() {
    api.getMeal().then(meal => {
      this.render({ meal });
    });
  }

  render({ meal } = {}) {
    const html = m.render(template, {
      header: this.header.render(),
      left: this.video.render({ picture: meal.picture }),
      right: this.description.render(meal)
    });

    this.$container.innerHTML = html;
    this.addEvents();
  }

  addEvents() {
    this.header.addEvents();
    // this.description.addEvents();
  }
}

export default App;
