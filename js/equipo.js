const equipoArray = [{
        id: 1,
        name: "Jose Espinosa",
        pictureUrl: "../images/profile/joer9514.jpg",
        imageAlt: "full stack developer",
        profile: "https://www.linkedin.com/in/joer9514"
    },
    {
        id: 2,
        name: "Jose Espinosa",
        pictureUrl: "../images/profile/joer9514.jpg",
        imageAlt: "full stack developer",
        profile: "https://www.linkedin.com/in/joer9514"
    },
    {
        id: 3,
        name: "Jose Espinosa",
        pictureUrl: "../images/profile/joer9514.jpg",
        imageAlt: "full stack developer",
        profile: "https://www.linkedin.com/in/joer9514"
    },
];


let htmlCode3 = ``;

equipoArray.forEach(function (singleEquipotObjects) {
    htmlCode3 =
        htmlCode3 +
        `
        <figure class="equipo-figure">
            <a href="${singleEquipotObjects.profile}"><img class="equipo-img" loading="lazy" src="${singleEquipotObjects.pictureUrl}" alt="${singleEquipotObjects.imageAlt}"></a>
            <figcaption>
                <h3>${singleEquipotObjects.name}</h3>
            </figcaption>
        </figure>
        `;
});

const equipoCards = document.querySelector(".equipo-container");

equipoCards.innerHTML = htmlCode3;