document.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('.menuLinks');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    });

    const modeButton = document.querySelector("#mode");
    const body = document.body;

    modeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
});

