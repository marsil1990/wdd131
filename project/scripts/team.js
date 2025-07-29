const goalkeepers = [
    { number: 1, country: "Panama", name: "Luis Mejía" },
    { number: 25, country: "Uruguay", name: "Ignacio Suárez" },
    { number: 40, country: "Uruguay", name: "Diego Capdevila" }
];

const defenders = [
    { number: 0, country: "Uruguay", name: "Matías de los Santos" },
    { number: 4, country: "Uruguay", name: "Sebastián Coates" },
    { number: 13, country: "Uruguay", name: "Emiliano Ancheta" },
    { number: 15, country: "Uruguay", name: "Paolo Calione" },
    { number: 27, country: "Uruguay", name: "Diego Romero" },
    { number: 29, country: "Colombia", name: "Julián Millán" },
    { number: 77, country: "Uruguay", name: "Nicolás Rodríguez" }
];

const midfielders = [
    { number: 5, country: "Uruguay", name: "Yonatan Rodríguez" },
    { number: 6, country: "Uruguay", name: "Luciano Boggio" },
    { number: 8, country: "Uruguay", name: "Christian Oliva" },
    { number: 10, country: "Uruguay", name: "Mauricio Pereyra" },
    { number: 14, country: "Uruguay", name: "Nicolás Lodeiro" },
    { number: 23, country: "Uruguay", name: "Lucas Rodríguez" },
    { number: 32, country: "Uruguay", name: "Rodrigo Mederos" },
    { number: 80, country: "Venezuela", name: "Rómulo Otero" }
];

const forwards = [
    { number: 7, country: "Uruguay", name: "Nicolás López" },
    { number: 9, country: "Uruguay", name: "Maximiliano Gómez" },
    { number: 11, country: "Uruguay", name: "Bruno Arady" },
    { number: 16, country: "Uruguay", name: "Lucas Villalba" },
    { number: 20, country: "Uruguay", name: "Gonzalo Carneiro" },
    { number: 21, country: "Uruguay", name: "Renzo Sánchez" },
    { number: 24, country: "Uruguay", name: "Exequiel Mereles" },
    { number: 30, country: "Nigeria", name: "Christian Ebere" }
];






function goalkeepersTable(player) {
    return `<tr><td>${player.name}</td><td>${player.number}</td><td>${player.country}</td></tr>`
}


function renderGoalkeepers(players) {
    const html = players.map(goalkeepersTable);
    document.querySelector("#goalkeepers").innerHTML = html.join("");
}



/*---------------------------------------------------------*/

function defendersTable(player) {
    return `<tr><td>${player.name}</td><td>${player.number}</td><td>${player.country}</td></tr>`
}


function renderDefenders(players) {
    const html = players.map(defendersTable);
    document.querySelector("#defenders").innerHTML = html.join("");
}


/*---------------------------------------------------------*/

function midfieldersTable(player) {
    return `<tr><td>${player.name}</td><td>${player.number}</td><td>${player.country}</td></tr>`
}


function renderMidfielders(players) {
    const html = players.map(midfieldersTable);
    document.querySelector("#midfielders").innerHTML = html.join("");
}




/*---------------------------------------------------------*/

function forwardsTable(player) {
    return `<tr><td>${player.name}</td><td>${player.number}</td><td>${player.country}</td></tr>`
}


function renderForwards(players) {
    const html = players.map(forwardsTable);
    document.querySelector("#forwards").innerHTML = html.join("");
}



function allPlayers() {
    renderForwards(forwards);
    renderMidfielders(midfielders);
    renderGoalkeepers(goalkeepers);
    renderDefenders(defenders);
}

function localPlayer() {
    const filterdForwards = forwards.filter(player => player.country === 'Uruguay');
    const filteredMidfielders = midfielders.filter(player => player.country === 'Uruguay');
    const filteredGoalkeepers = goalkeepers.filter(player => player.country === 'Uruguay');
    const filtereddefenders = defenders.filter(player => player.country === 'Uruguay');
    renderForwards(filterdForwards);
    renderMidfielders(filteredMidfielders);
    renderGoalkeepers(filteredGoalkeepers);
    renderDefenders(filtereddefenders);
}

function foreignPlayers() {
    const filterdForwards = forwards.filter(player => player.country !== 'Uruguay');
    const filteredMidfielders = midfielders.filter(player => player.country !== 'Uruguay');
    const filteredGoalkeepers = goalkeepers.filter(player => player.country !== 'Uruguay');
    const filtereddefenders = defenders.filter(player => player.country !== 'Uruguay');
    renderForwards(filterdForwards);
    renderMidfielders(filteredMidfielders);
    renderGoalkeepers(filteredGoalkeepers);
    renderDefenders(filtereddefenders);
}

const selectValue = document.getElementById("player-type")
allPlayers();
selectValue.addEventListener("change", function () {
    const selected = selectValue.value;
    if (selected == 'all')
        allPlayers()
    else if (selected == 'local') {
        localPlayer();
    }
    else {
        foreignPlayers();
    }
});


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
