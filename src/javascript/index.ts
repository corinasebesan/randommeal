import App from "./components/app/index";
import "../css/index.css";

var bod: HTMLElement = document.body;

//When the body is loaded it randers the data on the page
bod.onload = () => {
  const app: App = new App(bod);
  app.requestMeal();
};
