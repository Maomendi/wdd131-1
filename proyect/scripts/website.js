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

    event.preventDefault();

    
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value;

    const learningLevel = document.querySelector('input[name="learningLevel"]:checked')?.value;

    
    const reasons = Array.from(document.querySelectorAll('input[name="reason"]:checked'))
                         .map(reason => reason.value);

    const formData = {
        name,
        email,
        age,
        country,
        learningLevel,
        reasons,
        message
    };

   
    localStorage.setItem("contactData", JSON.stringify(formData));

    window.location.href = "review.html";
});


document.addEventListener("DOMContentLoaded", function () {

    const reviewContainer = document.getElementById("reviewContainer");

 
    const storedData = localStorage.getItem("contactData");

    if (storedData) {

        const data = JSON.parse(storedData);

        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = data.message;

        reviewContainer.appendChild(messageParagraph);

    }
});



const testimonials = [
    {
        name: "Sofia Martinez",
        age: 17,
        school: "Colegio Bolivar",
        testimonial: "Adriana made learning Spanish feel natural and fun!"
    },
    {
        name: "Daniel Rodriguez",
        age: 18,
        school: "Colegio Nueva Granada",
        testimonial: "Her conversational method helped me gain confidence quickly."
    },
    {
        name: "Camila Torres",
        age: 16,
        school: "Colegio Bolivar",
        testimonial: "I improved my pronunciation tremendously in just weeks."
    },
    {
        name: "Andres Lopez",
        age: 19,
        school: "Colegio Nueva Granada",
        testimonial: "She explains grammar in such a clear and simple way."
    },
    {
        name: "Valentina Cruz",
        age: 17,
        school: "Colegio Bolivar",
        testimonial: "Classes feel engaging and interactive every time."
    }
];


function createTestimonialCards() {

    const grid = document.querySelector(".testimonial-grid");
    grid.innerHTML = "";

    testimonials.forEach(student => {

        let card = document.createElement("div");
        card.classList.add("testimonial-card");

        let name = document.createElement("h3");
        let age = document.createElement("p");
        let school = document.createElement("p");
        let message = document.createElement("p");

        name.textContent = student.name;
        age.innerHTML = `<strong>Age:</strong> ${student.age}`;
        school.innerHTML = `<strong>School:</strong> ${student.school}`;
        message.textContent = `"${student.testimonial}"`;

        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(school);
        card.appendChild(message);

        grid.appendChild(card);
    });
}
