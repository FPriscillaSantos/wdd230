const url = `data/members.json`;
const membersList = document.querySelector('#membersList');

async function getMembersList() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let tel = document.createElement('p');
        let url = document.createElement('a');
        let membership = document.createElement('p');

        card.classList.add('member-card');
        membership.classList.add('membership');

        image.setAttribute('src', member.imageIcon || 'default-image.png'); 
        image.setAttribute('alt', member.member);
        name.textContent = member.member;
        address.textContent = member.address;
        tel.textContent = member.tel;
        url.setAttribute('href', `https://${member.url}`);
        url.textContent = member.url;
        membership.textContent = member.membership;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(tel);
        card.appendChild(url);
        card.appendChild(membership);

        membersList.appendChild(card);
    });
}

getMembersList();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    membersList.classList.add("grid");
    membersList.classList.remove("list");
});

listButton.addEventListener("click", () => {
    membersList.classList.add("list");
    membersList.classList.remove("grid");
});
