import App from "./app.js";
import Header from "./components/header";
import "../css/index.css";

document.body.onload = () => {
  let $container = document.body;
  let header = new Header({
    title: "Vrei sa mamanci ?",
    subtitle: "Alex e awsome si modest"
  });

  header.render($container);
  // var app = new App();
  // app.run();
};
