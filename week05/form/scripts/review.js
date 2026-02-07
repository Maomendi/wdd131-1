const reviewCountDisplay = document.querySelector("#reviewCount");


let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;


const params = new URLSearchParams(window.location.search);

if (params.has("product") && params.has("rating")) {
  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
}

reviewCountDisplay.textContent = reviewCount;