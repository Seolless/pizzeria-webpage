import products from "./prices.js";

export function drawMenu() {
  const menu = document.createElement("div");
  menu.id = "menu-card";
  document.getElementById("content").appendChild(menu);

  const menuItem = document.createElement("div");
  menuItem.id = "menu-item";
  document.getElementById("menu-card").appendChild(menuItem);

  const titleCard = document.createElement("div");
  titleCard.id = "title-card";
  document.getElementById("menu-item").appendChild(titleCard);

  const title = document.createElement("p");
  title.id = "title";
  title.innerText = "Priskategori 1";
  document.getElementById("title-card").appendChild(title);
  /* I might use for some other info later.
  const cost = document.createElement("p");
  cost.id = "cost";
  cost.innerText = "80kr - Familje: 185kr";
  document.getElementById("title-card").appendChild(cost);
*/
  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    const item = document.createElement("div");
    item.id = `item${i}`;
    item.className = "item";
    document.getElementById("menu-item").appendChild(item);

    const itemWrapper = document.createElement("div");
    itemWrapper.id = `item-wrapper${i}`;
    itemWrapper.className = "item-wrapper";
    document.getElementById(`item${i}`).appendChild(itemWrapper);

    const itemName = document.createElement("p");
    itemName.className = "item-name";
    itemName.innerText = element.name;
    document.getElementById(`item-wrapper${i}`).appendChild(itemName);

    const itemIngredients = document.createElement("p");
    itemIngredients.className = "item-ingredients";
    itemIngredients.innerText = element.ingredients;
    document.getElementById(`item-wrapper${i}`).appendChild(itemIngredients);

    const itemCost = document.createElement("p");
    itemCost.className = "item-cost";
    itemCost.innerText = `${element.price} kr`;
    document.getElementById(`item${i}`).appendChild(itemCost);
  }
}
