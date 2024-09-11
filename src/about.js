export function drawAbout() {
  const aboutWrapper = document.createElement("div");
  aboutWrapper.id = "about-wrapper";
  document.getElementById("content").appendChild(aboutWrapper);

  const aboutTitle = document.createElement("p");
  aboutTitle.className = "about-title";
  aboutTitle.innerText = "About Us";
  document.getElementById("about-wrapper").appendChild(aboutTitle);

  const aboutText1 = document.createElement("p");
  aboutText1.className = "about-text";
  aboutText1.innerText =
    "Welcome to Valentino, where passion meets pizza! Since our opening in 1997, we’ve been committed to bringing the authentic flavors of Italy right to your table. Our story began with a simple goal: to create a warm, welcoming place where friends and family can gather to enjoy great food made with love.";
  document.getElementById("about-wrapper").appendChild(aboutText1);

  const aboutText2 = document.createElement("p");
  aboutText2.className = "about-text";
  aboutText2.innerText =
    "Whether you're craving a classic Margherita, a loaded Meat Lover’s, or a unique specialty pie, we’ve got something for everyone. And it’s not just pizza – our menu features a variety of mouthwatering appetizers, fresh salads, and homemade desserts, perfect for any occasion.";
  document.getElementById("about-wrapper").appendChild(aboutText2);

  const aboutText3 = document.createElement("p");
  aboutText3.className = "about-text";
  aboutText3.innerText =
    "We’re more than just a pizzeria – we’re a part of the community. Whether you're dining in, taking out, or enjoying delivery, our team is dedicated to providing you with exceptional service and a memorable experience every time.";
  document.getElementById("about-wrapper").appendChild(aboutText3);

  const aboutText4 = document.createElement("p");
  aboutText4.className = "about-text";
  aboutText4.innerText =
    "Thank you for making Valentino your go-to place for great pizza. We can’t wait to serve you!";
  document.getElementById("about-wrapper").appendChild(aboutText4);
}
