import App from "./components/app/index";
import "../css/index.css";

var bod: HTMLElement = document.body;

bod.onload = () => {
  const app: App = new App(bod);
  app.requestMeal();
};
