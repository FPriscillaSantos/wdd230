document.addEventListener('DOMContentLoaded', () => {
    
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    const year = new Date().toLocaleDateString('en-US', { year: 'numeric' });
    document.getElementById('year').textContent = year;

    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('.menuLinks');

    hamburgerElement.addEventListener('click', () => {
        navElement.classList.toggle('open');
        hamburgerElement.classList.toggle('open');
    
    });
});