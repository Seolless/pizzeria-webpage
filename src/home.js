export function drawHome() {
  const home = document.createElement("div");
  home.id = "home-wrapper";
  document.getElementById("content").appendChild(home);

  const homeTitle = document.createElement("p");
  homeTitle.className = "home-title";
  homeTitle.innerText = "The best pizza in Borlänge.";
  document.getElementById("home-wrapper").appendChild(homeTitle);

  const homeText = document.createElement("p");
  homeText.className = "home-text";
  homeText.innerText = "Experience great dining at an affordable price.";
  document.getElementById("home-wrapper").appendChild(homeText);

  const homeImgWrapper = document.createElement("div");
  homeImgWrapper.id = "home-img-wrapper";
  document.getElementById("home-wrapper").appendChild(homeImgWrapper);

  const homeImg1 = document.createElement("img");
  homeImg1.src = "https://i.imgur.com/BVbormN.png";
  homeImg1.className = "home-img";
  document.getElementById("home-img-wrapper").appendChild(homeImg1);

  const homeImg2 = document.createElement("img");
  homeImg2.src = "https://i.imgur.com/r9MkhDx.png";
  homeImg2.className = "home-img";
  document.getElementById("home-img-wrapper").appendChild(homeImg2);
}
