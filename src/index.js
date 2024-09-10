import "./styles.css";
import { drawMenu } from "./menu.js";
const buttons = document.getElementsByClassName("header-btn");
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", () => loadContent(element.id));
}
function unloadContent() {
  if (document.getElementById("menu-wrapper")) {
    const element = document.getElementById("menu-wrapper");
    element.remove();
  }
}
function loadContent(button) {
  switch (button) {
    case "home":
      unloadContent();
      break;
    case "menu":
      unloadContent();
      drawMenu();
      break;
    case "about":
      unloadContent();
      break;
    default:
      console.log("Error. Button ID Not Found.");
      break;
  }
}
