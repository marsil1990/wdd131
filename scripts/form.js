const products = [

    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];




function optionName(option) {
    return `<option value="${option.id}">${option.name}</option>`
}

function renderOptions(products) {
    const select = document.querySelector("#pname");
    select.innerHTML = '<option value="" disabled selected>Choose a Product</option>';
    select.innerHTML += products.map(optionName).join("");
}

renderOptions(products);

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified " + lastModified;
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;