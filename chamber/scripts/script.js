// Função para exibir mensagem no elemento com id "message"
function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

// Evento que é disparado quando o documento HTML foi completamente carregado
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

    // Verificar se já existe uma data de última visita no localStorage
    if (!localStorage.getItem('lastVisit')) {
        // Se não houver, é a primeira visita
        displayMessage("Welcome! Let us know if you have any questions.");
    } else {
        // Se houver, calcular a diferença de tempo entre as visitas
        var lastVisit = new Date(localStorage.getItem('lastVisit'));
        var currentDate = new Date();
        var timeDiff = currentDate.getTime() - lastVisit.getTime();
        var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Diferença em dias

        // Determinar qual mensagem exibir com base na diferença de dias
        if (diffDays < 1) {
            displayMessage("Back so soon! Awesome!");
        } else {
            if (diffDays === 1) {
                displayMessage("You last visited 1 day ago.");
            } else {
                displayMessage("You last visited " + diffDays + " days ago.");
            }
        }
    }

    // Atualizar o localStorage com a data da visita atual
    localStorage.setItem('lastVisit', new Date().toISOString());

    // Definir o timestamp atual no campo oculto
    document.getElementById('timestamp').value = new Date().toISOString();

});