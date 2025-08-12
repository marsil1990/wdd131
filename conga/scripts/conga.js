document.addEventListener("DOMContentLoaded", function () {

    let players = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];

    const playersNumber = document.getElementById('numberOfplayers');
    const playersInputs = document.getElementById('playersname');
    const playersPlaying = document.getElementById("players");
    const table = document.querySelector("table");
    const update = document.getElementById("update");
    const start = document.getElementById("start");
    const restart = document.getElementById("restart");
    table.classList.add("hide");
    update.classList.add("hide");
    start.classList.add("hide");


    function renderAddPlayersInput(inputsPlayers) {
        playersInputs.innerHTML = inputsPlayers;
    }


    function showPlayers(player) {
        return `<tr> <td>${player.name}</td> <td> ${player.points}</td> <td> <input type="number" id="add${player.id}"/></td></tr>`
    }

    function renderPlayers(players) {
        let playersShowing = players.map(showPlayers);
        playersPlaying.innerHTML = playersShowing.join("");
    }

    document.getElementById("add").addEventListener('click', () => {
        start.classList.remove("hide");
        playersInputs.classList.remove("hide");
        let inputs = []
        if (!players) {
            for (let i = 0; i < playersNumber.value; i++) {
                inputs.push(`<li> <input type="text" id="${i}"/> </li>`)
            }
            let inputsString = inputs.join("");
            renderAddPlayersInput(inputsString);
        }
        else {
            for (let i = players.length; i < players.length + parseInt(playersNumber.value); i++) {
                console.log(players.length + parseInt(playersNumber.value))
                inputs.push(`<li> <input type="text" id="${i}"/> </li>`)
            }
            let inputsString = inputs.join("");
            renderAddPlayersInput(inputsString);
        }

    })

    start.addEventListener('click', () => {
        table.classList.remove("hide");
        update.classList.remove("hide");
        if (!players) {
            console.log(playersNumber.value);
            for (let i = 0; i < playersNumber.value; i++) {
                let inputP = document.getElementById(`${i}`)

                players.push({ id: i, name: inputP.value, points: 0 })
            }
        }
        else {
            let aux = players.length
            for (let i = aux; i < aux + parseInt(playersNumber.value); i++) {
                let inputP = document.getElementById(`${i}`)
                console.log(i, inputP, players.length + parseInt(playersNumber.value));
                players.push({ id: i, name: inputP.value, points: 0 })
            }
        }
        localStorage.setItem('players', JSON.stringify(players));
        renderPlayers(players);
        playersInputs.classList.add("hide");
        playersNumber.value = "";
        start.classList.add("hide");
    })


    update.addEventListener('click', () => {
        for (let i = 0; i < players.length; i++) {
            if (document.getElementById(`add${i}`).value) {
                players[i].points = parseInt(document.getElementById(`add${i}`).value) + parseInt(players[i].points)
            }
        }
        localStorage.setItem('players', JSON.stringify(players));
        renderPlayers(players);
    })

    restart.addEventListener('click', () => {
        players = [];
        localStorage.setItem('players', JSON.stringify(players));
        renderPlayers(players);
    })
});