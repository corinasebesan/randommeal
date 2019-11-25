import App from "./components/app";
import "../css/index.css";

document.body.onload = () => {
  const app = new App(document.body);
  app.requestMeal();
};
