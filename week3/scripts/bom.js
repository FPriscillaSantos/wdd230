const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a book and chapter.');
        input.focus();
    }
});

function displayList(item) {
    const listChapter = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = item;
    listBtn.textContent = '❌';
    listBtn.classList.add('delete');

    listChapter.appendChild(listText);
    listChapter.appendChild(listBtn);
    list.appendChild(listChapter);

    listBtn.addEventListener('click', () => {
        list.removeChild(listChapter);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);  // remove the last character (❌)
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}