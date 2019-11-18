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

export default Meal;
