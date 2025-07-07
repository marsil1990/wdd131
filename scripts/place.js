document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last Modified " + lastModified;

    const temperatureElement = document.getElementById("temp");
    const speedElement = document.getElementById("speed");
    const temp = 8;
    const speed = 20;
    temperatureElement.textContent = `${temp} °C`;
    speedElement.textContent = `${speed} km/h`;
    const windchille = document.getElementById("windchill");

    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    if (temp <= 10 && speed > 4.8) {
        const chill = calculateWindChill(temp, speed);
        windchille.textContent = `${chill} °C`;
    }
    else {
        windchille.textContent = "N/A";
    }
});
