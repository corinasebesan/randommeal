class Meal {
  constructor(data) {
    this.title = data.strMeal;
    this.picture = data.strMealThumb;
    this.category = data.strCategory;
    this.tags = data.strTags
      ? data.strTags.split(",").map(e => e.toLowerCase())
      : [];
    this.instructions = data.strInstructions;
    this.data = data;
    this.video = data.strYoutube.replace("watch?v=", "embed/");
  }

  ingredients() {
    const names = Object.keys(this.data)
      .filter(k => k.indexOf("strIngredient") > -1)
      .map(k => this.data[k])
      .filter(v => v && v !== "");

    const measurements = Object.keys(this.data)
      .filter(k => k.indexOf("strMeasure") > -1)
      .map(k => this.data[k])
      .filter(v => v && v !== "");

    return names.map((name, idx) => {
      return {
        name,
        measurement: measurements[idx]
      };
    });
  }
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function getMeal() {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  return fetch(url)
    .then(resp => resp.json())
    .then(res => {
      const data = res.meals[0];
      return new Meal(data);
    });
}

function showMeal(meal) {
  const pic = document.getElementById("ima");
  const title = document.getElementById("title");
  const category = document.getElementById("category");
  const instructions = document.getElementById("instructions");
  const tags = document.getElementById("tags");
  const ingredients = document.getElementById("ingredients");
  const vid = document.getElementById("vid");

  pic.src = meal.picture;
  vid.src = meal.video;
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
}

function openWindow(meal) {
  newWindow = window.open(
    "",
    null,
    "height=600,width=900,status=yes,toolbar=no,menubar=no,location=no"
  );
  newWindow.document.innerHTML = `<iframe id="vi" src="${meal.video}"> </iframe>`;
}

function setValue(value) {
  document.getElementById("value").value = value;
}

function main() {
  getMeal().then(meal => showMeal(meal));

  document.getElementById("btn1").onclick = () => {
    getMeal().then(meal => showMeal(meal));
  };
  document.getElementById("btn2").onclick = () => {
    getMeal().then(meal => openWindow(meal));
  };
}
