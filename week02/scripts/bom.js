// In your blank js file, declare three (3) variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function () {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = '❌';
    const li = document.createElement('li');
    if (input.value.trim() !== '') {
        li.textContent = input.value.trim();
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        })
        input.value = ''
        input.focus()
    }
});

