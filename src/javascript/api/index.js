import Meal from "../meal.js";

const getMeal = () => {
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  return fetch(url)
    .then(resp => resp.json())
    .then(res => {
      const data = res.meals[0];
      return new Meal(data);
    });
};

export default {
  getMeal
};
