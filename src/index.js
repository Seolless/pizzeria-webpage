import "./styles.css";
import { drawMenu } from "./menu.js";
import { drawHome } from "./home.js";
const buttons = document.getElementsByClassName("header-btn");
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", () => loadContent(element.id));
}
function unloadContent() {
  if (document.getElementById("menu-wrapper")) {
    const element = document.getElementById("menu-wrapper");
    element.remove();
  } else if (document.getElementById("home-wrapper")) {
    const element = document.getElementById("home-wrapper");
    element.remove();
  }
}
//Draws homescreen on load.
drawHome();

function loadContent(button) {
  switch (button) {
    case "home":
      unloadContent();
      drawHome();
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
