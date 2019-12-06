import Ingredient from "./ingredients";

class Meal {
  public tagsToDisplay: Array<string>;

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
