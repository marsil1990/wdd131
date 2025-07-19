const fanForm = document.getElementById("fanForm");
const savedFan = document.getElementById("savedFan");

function showFan() {
    const fan = JSON.parse(localStorage.getItem("fan"));
    if (fan && savedFan) {
        savedFan.innerHTML = `<p>Welcome, ${fan.name}! Your favorite player is ${fan.favorite}.</p>`;
    }
}


if (fanForm) {
    fanForm.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const favorite = document.getElementById("favorite").value;
        localStorage.setItem("fan", JSON.stringify({ name, favorite }));
        showFan();
    });
}


showFan();