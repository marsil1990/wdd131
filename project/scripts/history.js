
const fanForm = document.getElementById("fanForm");
const savedFan = document.getElementById("savedFan");

function showFan(fan) {
    if (savedFan) {
        return `<p>${fan.name} thinks that the best player in Nacional's history is ${fan.favorite}.</p>`;
    }
}

function render(players) {
    const html = players.map(showFan);
    document.querySelector("#savedFan").innerHTML = html.join("");
}


let players = localStorage.getItem("fan") ? JSON.parse(localStorage.getItem("fan")) : [];
if (players) {
    render(players)
}


if (fanForm) {
    fanForm.addEventListener("submit", e => {
        players.push({ name: document.getElementById("name").value, favorite: document.getElementById("favorite").value });
        localStorage.setItem("fan", JSON.stringify(players));
        render(players);
    });
}






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
