const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('#title');
const header = document.querySelector("header");
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    header.classList.toggle("open");
    title.classList.toggle('hide');

});

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified " + lastModified;