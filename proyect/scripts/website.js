const ham = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
});





const slides = [
    {
        src: "./images/teacher.webp",
        alt: "Teacher teaching Spanish"
    },
    {
        src: "./images/teacher2.webp",
        alt: "Students practicing conversation"
    },
    {
        src: "./images/teacher3.webp",
        alt: "Cultural language activity"
    }
];

// Select DOM element
const slideshowImage = document.querySelector("#slideshow-image");

// Track current slide
let currentIndex = 0;

// Function 1: Display slide
function showSlide(index) {
    slideshowImage.src = `${slides[index].src}`;
    slideshowImage.alt = `${slides[index].alt}`;
}

// Function 2: Move to next slide
function nextSlide() {
    currentIndex++;

    // Conditional branching
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

// Automatically change every 5 seconds
setInterval(nextSlide, 5000);