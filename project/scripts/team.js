const players = [
    { name: "Luis Suárez", position: "Forward" },
    { name: "Emiliano Martínez", position: "Goalkeeper" },
    { name: "Diego Polenta", position: "Defender" }
];

const playerList = document.getElementById("playerList");
if (playerList) {
    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = `${player.name} - ${player.position}`;
        playerList.appendChild(li);
    });
}

