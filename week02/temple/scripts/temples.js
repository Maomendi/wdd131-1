const ham = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
});