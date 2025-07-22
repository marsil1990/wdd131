
let count = localStorage.getItem('count')
count = count ? parseInt(count) : 1;
const numberOfvisit = document.querySelector(".visits");
numberOfvisit.textContent = count;
count++;
localStorage.setItem('count', count)
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified " + lastModified;