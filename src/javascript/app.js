import Meal from "./meal.js";
import Header from "./components/header";
import MealVideo from "./components/meal-video";
import MealDescription from "./components/meal-description";
import { html, render } from "lit-html";

class App {
  getMeal() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    return fetch(url)
      .then(resp => resp.json())
      .then(res => {
        const data = res.meals[0];
        return new Meal(data);
      });
  }

  showMeal(meal) {
    let $container1 = document.getElementsByClassName("header");
    let $container2 = document.getElementsByClassName("panel");

    let header = new Header({});
    header.render($container1);

    let mealV = new MealVideo({
      picture: meal.picture
    });
    mealV.render($container2);

    let mealD = new MealDescription({
      title: meal.title,
      category: meal.category,
      tags: meal.tags.map(e => e).join(", "),
      instructions: meal.instructions,
      ingredients: meal.ingredients().map(
        ingredient => html`
          <li>
            <b>${ingredient.name}</b> -
            <em>${ingredient.measurement}</em>
          </li>
        `
      )
    });
    mealD.render($container2);

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("modal__btn-close")[0];
    const vid = document.getElementById("vi");

    document.getElementById("btn1").onclick = () => {
      this.getMeal().then(meal => this.showMeal(meal));
    };

    document.getElementById("btn2").onclick = () => {
      modal.style.display = "flex";
      vid.src = meal.video;
    };
    span.onclick = function() {
      modal.style.display = "none";
      vid.src = "";
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  run() {
    this.getMeal().then(meal => this.showMeal(meal));
  }
}

export default App;
