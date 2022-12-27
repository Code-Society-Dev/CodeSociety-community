const eventosArray = [
  //     {
  //     id: 3,
  //     pictureUrl: "../images/eventos/Inter7.png",
  //     imageAlt: "eventos",
  //     urlserver: "https://discord.gg/WD2UsPAC?event=914906990357139478"
  // }, {
  //     id: 3,
  //     pictureUrl: "../images/eventos/Inter8.png",
  //     imageAlt: "eventos",
  //     urlserver: "https://discord.gg/WD2UsPAC?event=914907199598362704"
  // }, {
  //     id: 3,
  //     pictureUrl: "../images/eventos/Inter9.png",
  //     imageAlt: "eventos",
  //     urlserver: "https://discord.gg/WD2UsPAC?event=914913620498989066"
  //     },
  //   {
  //   id: 3,
  //   pictureUrl: "../images/eventos/TwD23.jpeg",
  //   imageAlt: "eventos",
  //   urlserver: "https://discord.gg/DwYtHh5k?event=919762356240781403"
  // },
  {
    id: 3,
    pictureUrl: "../images/eventos/Blockchain en AWS.png",
    imageAlt: "Blockchain con AWS",
    urlserver: "https://discord.gg/4MPexrTz?event=950381421422346250",
  },
  // {
  //   id: 3,
  //   pictureUrl: "../images/eventos/Inter12.png",
  //   imageAlt: "eventos",
  //   urlserver: "https://discord.gg/WD2UsPAC?event=914913620498989066"
  // }
];



let htmlCode1 = ``;

eventosArray.forEach(function (singleEventostObjects) {
    htmlCode1 =
        htmlCode1 +
        `
        <figure class="eventos-figure">
            <a target="_blank" href="${singleEventostObjects.urlserver}"><img class="eventos-img" loading="lazy" src="${singleEventostObjects.pictureUrl}" alt="${singleEventostObjects.imageAlt}"></a>
        </figure>
        `;
});

const eventosCards = document.querySelector(".eventos-container");

// eventosCards.innerHTML = htmlCode1;