import "./styles.css";
import { drawMenu } from "./menu.js";
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", () => loadContent(element.id));
}
function unloadContent() {
  if (document.getElementById("menu-card")) {
    const element = document.getElementById("menu-card");
    element.remove();
  }
}
function loadContent(button) {
  switch (button) {
    case "home":
      console.log("It works");
      break;
    case "menu":
      unloadContent();
      drawMenu();
      break;
    case "about":
      console.log("It works aboot");
      break;
    default:
      console.log("Error. Button ID Not Found.");
      break;
  }
}
