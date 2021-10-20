const talleresArray = [{
        id: 1,
        title: "Software Development",
        pictureUrl: "../images/icons/software.png",
        imageAlt: "software, desarrollo, comunidad, code society"
    },
    {
        id: 2,
        title: "Inglés",
        pictureUrl: "../images/icons/english.png",
        imageAlt: "inglés, idiomas, lenguajes, code society"
    },
    {
        id: 3,
        title: "Cyber Seguridad",
        pictureUrl: "../images/icons/cyber-security.png",
        imageAlt: "cyber seguridad, seguridad informatica, redes, linux, code society"
    },
    {
        id: 4,
        title: "Control de Calidad",
        pictureUrl: "../images/icons/control-calidad.png",
        imageAlt: "control de calidad, software, mejores practicas, code society"
    }
];


let htmlCode = ``;

talleresArray.forEach(function (singleTallerestObjects) {
    htmlCode =
        htmlCode +
        `
    <div class="card">
        <figure class="card-figure">
            <img class="card-img" loading="lazy" src="${singleTallerestObjects.pictureUrl}" alt="${singleTallerestObjects.imageAlt}">
        </figure>
        <h4>${singleTallerestObjects.title}</h4>
        <a href="#equipo" class="btn-2 btn-three">Información</a>
    </div>
  `;
});

const talleresCards = document.querySelector(".talleres-container");

talleresCards.innerHTML = htmlCode;