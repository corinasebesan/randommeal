import Meal from "./meal.js";

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
    const pic = document.getElementById("ima");
    const title = document.getElementById("title");
    const category = document.getElementById("category");
    const instructions = document.getElementById("instructions");
    const tags = document.getElementById("tags");
    const ingredients = document.getElementById("ingredients");

    pic.src = meal.picture;
    title.innerHTML = meal.title;
    category.innerHTML = `<b>Category:</b> ${meal.category}`;
    instructions.innerHTML = meal.instructions;
    tags.innerHTML = `<b>Tags:</b> ${meal.tags.map(e => e).join(", ")}`;
    ingredients.innerHTML = meal
      .ingredients()
      .map(ingredient => {
        return `<li><b>${ingredient.name}</b> - <em>${ingredient.measurement}</em></li>`;
      })
      .join("");
    document.getElementById("btn2").onclick = () => {
      openWindow(meal);
    };
  }

  run() {
    this.getMeal().then(meal => this.showMeal(meal));
    document.getElementById("btn1").onclick = () => {
      this.getMeal().then(meal => this.showMeal(meal));
    };
  }
}

export default App;
