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

  pic.src = meal.picture;
  title.innerHTML = meal.title;
  category.innerHTML = `Category: ${meal.category}`;
  instructions.innerHTML = meal.instructions;
  tags.innerHTML = `Tags: ${meal.tags.map(e => e + "❤️").join(", ")}`;
  ingredients.innerHTML = meal
    .ingredients()
    .map(ingredient => {
      return `<li><b>${ingredient.name}</b> - <em>${ingredient.measurement}</em></li>`;
    })
    .join("");
}

// function fetching(url) {
//   const pic = document.getElementById("ima");
//   const title = document.getElementById("title");
//   const category = document.getElementById("category");
//   const instructions = document.getElementById("instructions");
//   const tags = document.getElementById("tags");
//   const vid = document.getElementById("vid");
//   const ul = document.getElementById("ingredients");

//   fetch(url)
//     .then(resp => resp.json())
//     .then(data => {
//       const receipts = data.meals;
//       return receipts.map(receipt => {
//         let nameIn = "";
//         let nameMe = "";

//         pic.src = receipt.strMealThumb;
//         title.textContent = receipt.strMeal;
//         category.textContent = `Category: ${receipt.strCategory}`;
//         instructions.textContent = receipt.strInstructions;
//         tags.textContent = `Tags: ${receipt.strTags}`;
//         vid.src = receipt.strYoutube.replace("watch?v=", "embed/");

//         while (ul.firstChild) {
//           ul.removeChild(ul.firstChild);
//         }

//         for (let i = 1; i <= 20; i += 1) {
//           nameIn = `strIngredient${i}`;
//           nameMe = `strMeasure${i}`;
//           if (receipt[nameIn] !== null && receipt[nameIn] !== "") {
//             const li = createNode("li");
//             li.setAttribute("id", `- ${receipt[nameIn]} - ${receipt[nameMe]}`);
//             append(
//               li,
//               document.createTextNode(
//                 `- ${receipt[nameIn]} - ${receipt[nameMe]}`
//               )
//             );
//             append(ul, li);
//           }
//         }

//         return 0;
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

function main() {
  getMeal().then(meal => showMeal(meal));

  document.getElementById("btn1").onclick = () => {
    getMeal().then(meal => showMeal(meal));
  };
}
