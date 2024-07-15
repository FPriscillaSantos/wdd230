const baseURL = "https://fpriscillasantos.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(data) {
    const ul = document.getElementById('learning-list');
    data.weeks.forEach(week => {
        const li = document.createElement('li');
        li.innerHTML = `${week.week} - ${week.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(' | ')}`;
        ul.appendChild(li);
    });
}

getLinks();