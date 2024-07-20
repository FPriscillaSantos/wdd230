document.addEventListener('DOMContentLoaded', function() {
    const url = 'data/members.json';
    const membersList = document.querySelector('#membersList');

    async function getMembersList() {
        const response = await fetch(url);
        const data = await response.json();
        const filteredMembers = data.members.filter(member => member.membership === "Gold Membership" || member.membership === "Silver Membership");
        const shuffledMembers = shuffle(filteredMembers);
        displayMembers(shuffledMembers.slice(0, 4)); 
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const displayMembers = (members) => {
        members.forEach((member, index) => {
            const postElement = document.getElementById(`post${index + 1}`);
            
            // Define a classe de membership e adicione uma classe condicional
            let membershipClass = 'membership';
            if (member.membership === 'Gold Membership') {
                membershipClass += ' gold'; // Adiciona classe gold condicional
            } else if (member.membership === 'Silver Membership') {
                membershipClass += ' silver'; // Adiciona classe silver condicional
            }

            // Define o conteúdo HTML com a classe aplicada
            postElement.innerHTML = `
                <h4>${member.member}</h4>
                <p>${member.address}</p>
                <p>${member.tel}</p>
                <a href="https://${member.url}" target="_blank">${member.url}</a>
                <p class="${membershipClass}">${member.membership}</p>
            `;
        });
    }

    getMembersList();
});