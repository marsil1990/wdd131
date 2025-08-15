document.addEventListener("DOMContentLoaded", function () {

    let players = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players')) : [];



    const playersNumber = document.getElementById('numberOfplayers');
    const playersInputs = document.getElementById('playersname');
    const playersPlaying = document.getElementById("players");
    const table = document.querySelector("table");
    const column1 = document.querySelector(".column1");
    const update = document.getElementById("update");
    const start = document.getElementById("start");
    const restart = document.getElementById("restart");
    const winner = document.createElement("h2");



    // table.classList.add("hide");
    // update.classList.add("hide");
    // start.classList.add("hide");


    function renderAddPlayersInput(inputsPlayers) {
        playersInputs.innerHTML = inputsPlayers;
    }


    function showPlayers(player) {
        if (player.points >= 100) {
            return `<tr> <td>${player.name}</td> <td> ${player.points}</td> <td> <input type="number" id="add${player.id}"/></td>   <td> <button class="renganchar" id="r-${player.id}" value="${player.id}">Renganchar</button> <button class="eliminar" id="e-${player.id}" value="${player.id}">Eliminar</button></td></tr>`
        }
        else {
            return `<tr> <td>${player.name}</td> <td> ${player.points}</td> <td> <input type="number" id="add${player.id}"/></td></tr>`
        }
    }

    function renderPlayers(players) {
        let playersShowing = players.map(showPlayers);
        playersPlaying.innerHTML = playersShowing.join("");
    }

    if (players != []) {
        renderPlayers(players);
    }


    document.getElementById("add").addEventListener('click', () => {
        if (playersNumber.value != "") {
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
        }

    })


    start.addEventListener('click', () => {
        table.classList.remove("hide");
        update.classList.remove("hide");
        if (!players) {
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
        players.forEach(element => {
            if (document.getElementById(`add${element.id}`).value != "") {
                element.points = parseInt(document.getElementById(`add${element.id}`).value) + parseInt(element.points);
            }
        });
        localStorage.setItem('players', JSON.stringify(players));
        renderPlayers(players);
        let numberOfplayers = 0;
        let idplayer = null;

        players.forEach(element => {
            if (element.points >= 100) {
                numberOfplayers++;

            }
            else {
                idplayer = element.id
            }

        });

        if (numberOfplayers === players.length - 1) {
            let winningPalyer = `The winner is ${players[idplayer].name}`
            winner.textContent = winningPalyer;
            table.classList.add("hide");
            update.classList.add("hide");
            start.classList.add("hide");
            column1.append(winner);
            winner.classList.remove("hide");
            players = [];
            localStorage.setItem('players', JSON.stringify(players));
        }
        else if (numberOfplayers === players.length) {
            let winningPlyer = `Todos perdieron`
            winner.textContent = winningPlyer;
            table.classList.add("hide");
            update.classList.add("hide");
            start.classList.add("hide");
            column1.append(winner);
            winner.classList.remove("hide");
            players = [];
            localStorage.setItem('players', JSON.stringify(players));
        }
        else {
            renderPlayers(players)
            // buttondelete();
            // buttonrenganche();
        }

    })

    // function buttondelete() {
    //     document.querySelectorAll(".eliminar").forEach(b => {
    //         if (b != null) {
    //             b.addEventListener('click', (e) => {
    //                 console.log(e.target.value)
    //                 const idx1 = players.findIndex(p => p.id == parseInt(e.target.value));
    //                 if (idx1 !== -1) players.splice(idx1, 1);
    //                 for (let i = 0; i < players.length; i++) {
    //                     players[i].id = i;
    //                 }
    //                 localStorage.setItem('players', JSON.stringify(players));
    //                 renderPlayers(players);
    //                 buttondelete();
    //                 buttonrenganche();
    //             });
    //         }
    //     })
    // }


    // function buttonrenganche() {
    //     document.querySelectorAll(".renganchar").forEach(b => {
    //         if (b != null) {
    //             b.addEventListener('click', (e) => {
    //                 console.log();
    //                 let max = 0
    //                 players.forEach(element => {
    //                     if (element.points > max && element.points < 100) {
    //                         max = element.points
    //                     }
    //                 });
    //                 const idx2 = players.findIndex(p => p.id == parseInt(e.target.value));
    //                 players[idx2].points = max;
    //                 localStorage.setItem('players', JSON.stringify(players));
    //                 renderPlayers(players);
    //                 buttonrenganche()
    //                 buttondelete();
    //             });
    //         }
    //     })
    // }

    // renderPlayers(players);
    // buttondelete();
    // buttonrenganche();


    playersPlaying.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || !playersPlaying.contains(btn)) return;

        // ELIMINAR
        if (btn.classList.contains('eliminar')) {
            const id = Number(btn.value);
            const idx = players.findIndex(p => p.id === id);
            if (idx !== -1) {
                players.splice(idx, 1);
                players.forEach((p, i) => p.id = i); // reindex
                localStorage.setItem('players', JSON.stringify(players));
                renderPlayers(players);
            }
            return;
        }

        // RENGANCHAR
        if (btn.classList.contains('renganchar')) {
            const id = Number(btn.value);
            const max = players.reduce((m, p) => (p.points < 100 ? Math.max(m, p.points) : m), 0);
            const idx = players.findIndex(p => p.id === id);
            if (idx !== -1) {
                players[idx].points = max;
                localStorage.setItem('players', JSON.stringify(players));
                renderPlayers(players);
            }
        }
    });

    renderPlayers(players);

    restart.addEventListener('click', () => {
        players = [];
        localStorage.setItem('players', JSON.stringify(players));
        renderPlayers(players);
        table.classList.add("hide");
        update.classList.add("hide");
        start.classList.add("hide");
        winner.classList.add("hide");
    })




});