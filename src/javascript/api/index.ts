import Meal from "../meal";

const getMeal = async () => {
  const url: string = "https://www.themealdb.com/api/json/v1/1/random.php";

  const resp: Response = await fetch(url);
  const res = await resp.json();
  const data: {
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strTags: {
      split: (arg0: string) => { map: (arg0: (e: string) => string) => void };
    };
    strInstructions: string;
    strYoutube: { replace: (arg0: string, arg1: string) => string };
  } = res.meals[0];
  return new Meal(data);
};

export default {
  getMeal
};
