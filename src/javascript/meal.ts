import Ingredient from "./ingredients";

class Meal {
  public tagsToDisplay: Array<string>;
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
    public title: string,
    public thumnailUrl: string,
    public category: string,
    public instructions: string,
    public youtubeUrl: string,
    public ingredients: Array<Ingredient>,
    private tagsString: string
  ) {
    this.tagsToDisplay =
      this.tagsString && this.tagsString.length > 0
        ? tagsString.split(",").map(e => e.toLowerCase())
        : [];
    this.youtubeUrl = youtubeUrl.replace("watch?v=", "embed/");
  }
}

export default Meal;
