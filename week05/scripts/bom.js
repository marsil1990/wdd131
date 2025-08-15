const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


let chaptersArray = getChapterList() || [];

chaptersArray.forEach((element) => {
    displayList(element)
});

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value.trim())
        chaptersArray.push(input.value.trim())
        setChapterList()
        input.value = ''
        input.focus()
    }


});

function displayList(item) {
    let deleteButton = document.createElement('button');
    let li = document.createElement('li');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myfavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myfavBOMList'));
}

function deleteChapter(chapter) {
    let c = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item.trim() !== c.trim())
    setChapterList();

}