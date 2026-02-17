const ham = document.getElementById("ham");
const navMenu = document.getElementById("nav-menu");

ham.addEventListener("click", () => {
  ham.classList.toggle("active");
  navMenu.classList.toggle("active");
});





// about me page

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
