const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerText = `© ${currentYear}`;


const lastModified = new Date(document.lastModified);
document.getElementById("last-modified").innerText = `last modified: ${document.lastModified}`;


const ham = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu");

if (ham && navMenu) {
    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

const slideshowImage = document.querySelector("#slideshow-image");

if (slideshowImage) {

    const slides = [
        { src: "./images/teacher.webp", alt: "Teacher portrait 1" },
        { src: "./images/teacher2.webp", alt: "Teacher portrait 2" },
        { src: "./images/teacher3.webp", alt: "Teacher portrait 3" }
    ];

    let currentIndex = 0;

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
}

const form = document.getElementById("contactForm");

if (form) {
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
}

const reviewContainer = document.getElementById("reviewContainer");

if (reviewContainer) {
    const storedData = localStorage.getItem("contactData");

    if (storedData) {
        const data = JSON.parse(storedData);

        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = data.message;

        reviewContainer.appendChild(messageParagraph);
    }
}

const grid = document.querySelector(".testimonial-grid");

if (grid) {

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
        }
    ];

    testimonials.forEach(student => {

        let card = document.createElement("div");
        card.classList.add("testimonial-card");

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>School:</strong> ${student.school}</p>
            <p>"${student.testimonial}"</p>
        `;

        grid.appendChild(card);
    });
}



