export function drawHome() {
  const home = document.createElement("div");
  home.id = "home-wrapper";
  //Change css to #
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
  //Change css to #
  document.getElementById("home-wrapper").appendChild(homeImgWrapper);

  const homeImg1 = document.createElement("img");
  homeImg1.src =
    "https://cdn.discordapp.com/attachments/704273673351200898/1282699889083547822/image.png?ex=66e1a05c&is=66e04edc&hm=070f98b48f6bc8d57fea3bdff6c681f0336c256d2f37bcb17b84132dad094557&";
  homeImg1.className = "home-img";
  document.getElementById("home-img-wrapper").appendChild(homeImg1);

  const homeImg2 = document.createElement("img");
  homeImg2.src =
    "https://cdn.discordapp.com/attachments/704273673351200898/1282700392228196363/image.png?ex=66e1a0d4&is=66e04f54&hm=fc8f5a295bf4fd0b06a2b8ed6ba7c699c09a855152c5fa7f172cae3e984b01e4&";
  homeImg2.className = "home-img";
  document.getElementById("home-img-wrapper").appendChild(homeImg2);
}
