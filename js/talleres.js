const talleresArray = [{
        id: 1,
        title: "Software Development",
        pictureUrl: "images/icons/software.png",
        imageAlt: "software, desarrollo, comunidad, code society",
        urlServer: "https://discord.gg/4MPexrTz?event=950381421422346250"
    },
    {
        id: 2,
        title: "Inglés",
        pictureUrl: "images/icons/english.png",
        imageAlt: "inglés, idiomas, lenguajes, code society",
        urlServer: "https://discord.gg/4MPexrTz?event=950381421422346250"
    },
    {
        id: 3,
        title: "Cyber Seguridad",
        pictureUrl: "images/icons/cyber-security.png",
        imageAlt: "cyber seguridad, seguridad informatica, redes, linux, code society",
        urlServer: "https://discord.gg/4MPexrTz?event=950381421422346250"
    },
    {
        id: 4,
        title: "Control de Calidad",
        pictureUrl: "images/icons/control-calidad.png",
        imageAlt: "control de calidad, software, mejores practicas, code society",
        urlServer: "https://discord.gg/4MPexrTz?event=950381421422346250"
    }
];


let htmlCode2 = ``;

talleresArray.forEach(function (singleTallerestObjects) {
    htmlCode2 =
      htmlCode2 +
      `
    <div class="card">
        <figure class="card-figure">
            <img class="card-img" loading="lazy" src="${singleTallerestObjects.pictureUrl}" alt="${singleTallerestObjects.imageAlt}">
        </figure>
        <h3>${singleTallerestObjects.title}</h3>
        <a target="_blank" href="${singleTallerestObjects.urlServer}" class="btn-2 btn-three">Más información</a>
    </div>
  `;
});

const talleresCards = document.querySelector(".talleres-container");

talleresCards.innerHTML = htmlCode2;