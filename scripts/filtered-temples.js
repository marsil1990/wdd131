const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17-19",
        area: 30659,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg"
    }
    // Add more temple objects here...
];

function templeCard(card) {
    return `<figure class="temple-card">
    <figcaption>
        <h2>${card.templeName}</h2>
        <p><strong>Location:</strong> ${card.location}</p>
        <p><strong>Dedicated:</strong>${card.dedicated}</p>
        <p><strong>Area:</strong> ${card.area}  sq  ft</p>
    </figcaption>
    <img src="${card.imageUrl}" alt="${card.templeName} Temple"  loading="lazy">
</figure>`
}

function renderAllCard(sections) {
    const html = sections.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderOldCard(sections) {
    const filteTemples = sections.filter(card => parseInt(card.dedicated.slice(0, 4)) < 1900);
    const html = filteTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderNewCard(sections) {
    const filteTemples = sections.filter(card => parseInt(card.dedicated.slice(0, 4)) > 2000);
    const html = filteTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderLargeCard(sections) {
    const filteTemples = sections.filter(card => card.area > 90000);
    const html = filteTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}

function renderSmallCard(sections) {
    const filteTemples = sections.filter(card => card.area < 10000);
    const html = filteTemples.map(templeCard);
    document.querySelector("#main").innerHTML = html.join("");
}


renderAllCard(temples)

document.querySelector('#old').addEventListener('click', function (event) {
    renderOldCard(temples)
})

document.querySelector('#new').addEventListener('click', function (event) {
    renderNewCard(temples)
})

document.getElementById('large').addEventListener('click', function (event) {
    renderLargeCard(temples)
})

document.getElementById('small').addEventListener('click', function (event) {
    renderSmallCard(temples);
})

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

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified " + lastModified;