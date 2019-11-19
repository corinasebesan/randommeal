import Meal from "./meal.js";
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
    const htmlCode2 = meal => html`
      <section class="header header--align">
        <h1 class="title--font text--margin0 h1--size title--color">
          Feeling Hungry?
        </h1>
        <h2 class="text--font h2--size text--margin0">
          Get a random meal by clicking the button
        </h2>
        <button class="btn btn--big" id="btn1">
          GET MEAL
          <i class="material-icons btn__fastfood" id="fastfood">fastfood</i>
        </button>
      </section>
      <section class="panel panel--align panel--margin">
        <div class="panel__left">
          <div class="img" style="background-image: url(${meal.picture});">
            <div class="img__overlay">
              <button class="btn" id="btn2">
                <i class="material-icons btn__play">play_arrow</i>
              </button>
            </div>
          </div>
        </div>
        <div class="panel__right">
          <div>
            <h3 class="title--font h3--size text--margin0 title--color">
              ${meal.title}
            </h3>
            <p class="text--font text--size text--margin0">
              <b>Category:</b> ${meal.category}
            </p>
            <p class="text--font text--size text--margin0">
              <b>Tags:</b> ${meal.tags.map(e => e).join(", ")}
            </p>
            <p class="text--font text--size">
              ${meal.instructions}
            </p>
            <h4 class="title--font text--size text--margin0">Ingredients:</h4>
            <ul class="ul text--font text--size text--margin0">
              ${meal.ingredients().map(
                ingredient => html`
                  <li>
                    <b>${ingredient.name}</b> -
                    <em>${ingredient.measurement}</em>
                  </li>
                `
              )}
            </ul>
          </div>
        </div>
        <div id="myModal" class="modal">
          <div class="modal__content">
            <span class="modal__btn-close">&times;</span>
            <iframe class="modal__iframe" id="vi" src=""> </iframe>
          </div>
        </div>
      </section>
    `;
    render(htmlCode2(meal), document.body);

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
