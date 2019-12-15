import Ingredient from "./ingredients";

class Meal {
  tagsToDisplay;
  /**
   * It makes an object with all the information related to the meal
   * @param title the title of the meal
   * @param thumnailUrl the url to the picture of the meal
   * @param category the
   * @param instructions
   * @param youtubeUrl
   * @param ingredients
   * @param tagsString
   */
  constructor(
    title,
    thumnailUrl,
    category,
    instructions,
    youtubeUrl,
    ingredients,
    tagsString
  ) {
    this.tagsToDisplay =
      this.tagsString && this.tagsString.length > 0
        ? tagsString.split(",").map(e => e.toLowerCase())
        : [];
    this.youtubeUrl = youtubeUrl.replace("watch?v=", "embed/");
  }
}

export default Meal;
