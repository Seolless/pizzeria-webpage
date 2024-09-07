import "./styles.css";
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener("click", () => loadContent(element.id));
}
function loadContent(button) {
  switch (button) {
    case "home":
      console.log("It works");
      break;
    case "menu":
      console.log("It works men");
      break;
    case "about":
      console.log("It works aboot");
      break;
    default:
      console.log("Error. Button ID Not Found.");
      break;
  }
}
