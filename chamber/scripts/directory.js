const url = `data/members.json`;
const membersList = document.querySelector('#membersList');

async function getMembersList() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayProphets(data.members);
}

getMembersList();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let adrees = document.createElement('p');
        let tel = document.createElement('p'); 
        let url = document.createElement('p'); 


    });
}