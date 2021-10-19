const toggle = document.querySelector(".figure-toggle");
const menu = document.querySelector(".header-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("visible");

    if (menu.classList.contains("visible")) {
        toggle.setAttribute("aria-label", "Cerrar menú");
        toggle.setAttribute("class", "figure-toggle fas fa-times");
    } else {
        toggle.setAttribute("aria-label", "Abrir menú");
        toggle.setAttribute("class", "figure-toggle fas fa-bars");
    }
});