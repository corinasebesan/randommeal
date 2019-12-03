class Meal {
  title: string;
  picture: string;
  category: string;
  tags: void | string[];
  instructions: string;
  data: {
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strTags: {
      split: (arg0: string) => { map: (arg0: (e: string) => string) => void };
    };
    strInstructions: string;
    strYoutube: { replace: (arg0: string, arg1: string) => string };
  };
  video: string;

  constructor(data: {
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strTags: {
      split: (arg0: string) => { map: (arg0: (e: string) => string) => void };
    };
    strInstructions: string;
    strYoutube: { replace: (arg0: string, arg1: string) => string };
  }) {
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
    const names: string[] = Object.keys(this.data)
      .filter(k => k.indexOf("strIngredient") > -1)
      .map(k => this.data[k])
      .filter(v => v && v !== "");

    const measurements: string[] = Object.keys(this.data)
      .filter(k => k.indexOf("strMeasure") > -1)
      .map(k => this.data[k])
      .filter(v => v && v !== "");

    return names.map((name: string, idx: number) => {
      return {
        name,
        measurement: measurements[idx]
      };
    });
  }
}

export default Meal;
