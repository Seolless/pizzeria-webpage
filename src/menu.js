import products from "./prices.js";

export function drawMenu() {
  const menu = document.createElement("div");
  menu.id = "menu-wrapper";
  document.getElementById("content").appendChild(menu);

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    if (!document.getElementById(element.category)) {
      const menuCard = document.createElement("div");
      menuCard.id = element.category;
      menuCard.className = "menu-card";
      document.getElementById("menu-wrapper").appendChild(menuCard);

      const titleCard = document.createElement("div");
      titleCard.id = `${element.category}-title`;
      titleCard.className = "title-card";
      document.getElementById(element.category).appendChild(titleCard);

      const title = document.createElement("p");
      title.id = "title";
      title.innerText = element.category;
      document.getElementById(`${element.category}-title`).appendChild(title);

      createItem(element, i);
    } else {
      createItem(element, i);
    }
  }
  function createItem(element, i) {
    const item = document.createElement("div");
    item.id = `item${i}`;
    item.className = "item";
    document.getElementById(element.category).appendChild(item);

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
