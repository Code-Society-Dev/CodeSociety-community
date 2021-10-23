const eventosArray = [{
    id: 1,
    pictureUrl: "../images/eventos/NSN.png",
    imageAlt: "eventos",
    urlserver: "https://discord.gg/ZbaCcZkKNp"
}];


let htmlCode1 = ``;

eventosArray.forEach(function (singleEventostObjects) {
    htmlCode1 =
        htmlCode1 +
        `
        <figure class="eventos-figure">
            <a target="_blank" href="${singleEventostObjects.urlserver}"><img
                class="eventos-img" loading="lazy" src="${singleEventostObjects.pictureUrl}" alt="${singleEventostObjects.imageAlt}"></a>
        </figure>
        `;
});

const eventosCards = document.querySelector(".eventos-container");

eventosCards.innerHTML = htmlCode1;