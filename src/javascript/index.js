import App from "./components/app/index";
import "../css/index.css";

var bod = document.body;

//When the body is loaded it randers the data on the page
bod.onload = () => {
  const app = new App(bod);
  app.requestMeal();
};
