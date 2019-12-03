import * as m from "mustache";
import Header from "../header";
import Description from "../meal-description";
import Video from "../meal-video";
import template from "./template.html";
import api from "../../api";
import Meal from "../../meal";

class App {
  header: Header;
  description: Description;
  video: Video;
  $container: HTMLElement;
  constructor($container: HTMLElement) {
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

  render({ meal = null } = {}) {
    const html = m.render(template, {
      header: this.header.render(),
      left: this.video.render({ picture: meal.picture }),
      right: this.description.render(meal)
    });

    this.$container.innerHTML = html;
    this.addEvents(meal);
  }

  addEvents(meal: Meal) {
    this.header.addEvents();
    this.video.addEvents(meal);
  }
}

export default App;
