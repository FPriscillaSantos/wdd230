const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myChapter = input.value.trim();
    input.value = '';
    
    if (myChapter === '') {
        alert('Please enter a book and chapter.');
        input.focus();
        return;
    }

    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listChapter.appendChild(listText);
    listText.textContent = myChapter;
    listChapter.appendChild(listBtn);
    listBtn.textContent = 'X';
    list.appendChild(listChapter);

    listBtn.addEventListener('click', () => {
        list.removeChild(listChapter);
    });

    input.focus();
});
