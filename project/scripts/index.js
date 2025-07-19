
const nextMatch = document.getElementById("nextMatch");
if (nextMatch) {
    const today = new Date();
    const matchDate = new Date();
    matchDate.setDate(today.getDate() + 3);
    nextMatch.innerHTML = `<h3>Next Match</h3><p>Nacional vs Peñarol - ${matchDate.toDateString()}</p>`;
}