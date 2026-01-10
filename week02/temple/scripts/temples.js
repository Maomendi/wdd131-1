const ham = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu");


ham.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    ham.classList.toggle("is-active");
});