const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") { // Ensure input is not empty
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value;
        deleteButton.textContent = "❌";
  
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = ""; // Clear input field
        input.focus(); // Refocus input
    } else {
        alert("Please enter a valid chapter.");
    }
});