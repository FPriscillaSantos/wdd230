const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

const year = {year: 'numeric'};
document.getElementById('year').textContent = new Date().toLocaleDateString('en-US', year);