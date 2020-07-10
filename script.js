const instagramButton = document.querySelector(".ig");
const facebookButton = document.querySelector(".fb");

const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const galleryButton = document.querySelector(".gallery");
const aboutButton = document.querySelector(".about");

const menuButton2 = document.querySelector(".BYOC-left");
const contactButton2 = document.querySelector(".holidays-right");

instagramButton.addEventListener("click", () => {
  window.open(
    "https://instagram.com/mariemariebakerie?igshid=1puhxbjh95qon",
    "_blank"
  );
});
-(-facebookButton.addEventListener("click", () => {
  window.open("https://www.facebook.com/marie.marie.bakeries/", "_blank");
}));

menuButton.addEventListener("click", () => {
  window.location.href = "menu.html";
});
menuButton2.addEventListener("click", () => {
  window.location.href = "menu.html";
});

contactButton.addEventListener("click", () => {
  window.location.href = "contact.html";
});
contactButton2.addEventListener("click", () => {
  window.location.href = "contact.html";
});

galleryButton.addEventListener("click", () => {
  window.location.href = "gallery.html";
});

aboutButton.addEventListener("click", () => {
  window.location.href = "about.html";
});
