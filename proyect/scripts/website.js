const ham = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
});





const slideshowImage = document.querySelector("#slideshow-image");

const slides = [
    { src: "./images/teacher.webp", alt: "Teacher portrait 1" },
    { src: "./images/teacher2.webp", alt: "Teacher portrait 2" },
    { src: "./images/teacher3.webp", alt: "Teacher portrait 3" }
];

let currentIndex = 0;


slides.forEach(slide => {
    const img = new Image();
    img.src = slide.src;
});


function showSlide(index) {
    slideshowImage.src = slides[index].src;
    slideshowImage.alt = slides[index].alt;
}


function nextSlide() {
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

setInterval(nextSlide, 1000);





// form JS


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault(); // stop normal submission

    // Get form values
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value;

    // Get selected learning level
    const learningLevel = document.querySelector('input[name="learningLevel"]:checked')?.value;

    // Get checked reasons (array)
    const reasons = Array.from(document.querySelectorAll('input[name="reason"]:checked'))
                         .map(reason => reason.value);

    // Store everything as an object
    const formData = {
        name,
        email,
        age,
        country,
        learningLevel,
        reasons,
        message
    };

    // Save to localStorage
    localStorage.setItem("contactData", JSON.stringify(formData));

    // Redirect manually
    window.location.href = "review.html";
});


document.addEventListener("DOMContentLoaded", function () {

    const reviewContainer = document.getElementById("reviewContainer");

    // Get data from localStorage
    const storedData = localStorage.getItem("contactData");

    if (storedData) {

        const data = JSON.parse(storedData);

        // Create paragraph for message
        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = data.message;

        reviewContainer.appendChild(messageParagraph);

    }
});

