
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerText = `© ${currentYear}`;


const lastModified = new Date(document.lastModified);
document.getElementById("last-modified").innerText = `last modified: ${document.lastModified}`;
