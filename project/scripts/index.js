
const matchList = [
    {
        opponent: "Peñarol",
        location: "Gran Parque Central",
        time: "18:00",
        date: new Date(2025, 8, 5).toDateString()
    },
    {
        opponent: "Defensor Sporting",
        location: "Estadio Luis Franzini",
        time: "20:30",
        date: new Date(2025, 8, 10).toDateString()
    },
    {
        opponent: "Liverpool",
        location: "Estadio Belvedere",
        time: "16:00",
        date: new Date(2025, 8, 17).toDateString()
    },
    {
        opponent: "Danubio",
        location: "Estadio Jardines del Hipódromo",
        time: "19:00",
        date: new Date(2025, 8, 24).toDateString()
    },
    {
        opponent: "Cerro Largo",
        location: "Gran Parque Central",
        time: "15:30",
        date: new Date(2025, 9, 1).toDateString()
    }
];


const nextMatch = document.getElementById("nextMatches");

function matchCard(match) {
    return `<div class="match">
                <div class="match-opponent"> 
                    <p>Nacional <br> vs <br> ${match.opponent} </p>
                </div> 
                <div class="match-information">
                    <ul>
                        <li>Location: ${match.location}</li>
                        <li>Time: ${match.time}</li>
                        <li>Date: ${match.date}</li>
                    </ul>
                </div>
            </div>`
}


function renderAllmatches(matches) {
    const html = matches.map(matchCard);
    document.querySelector("#nextMatches").innerHTML = html.join("");
}

renderAllmatches(matchList);

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