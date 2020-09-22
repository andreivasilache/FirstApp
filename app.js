//Put the elments
const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

//class
class Item {
        constructor(itemName) {
                this.createDiv(itemName);//creating div ^ item
        }
        createDiv(itemName) {
                const input = document.createElement('input');
                input.value = itemName;
                input.disabled = true;
                input.classList.add('item_input');
                input.type = 'text';

                const itemBox = document.createElement('div');
                itemBox.classList.add('item');

                const editButton = document.createElement('button');
                editButton.innerHTML = "EDIT"
                editButton.classList.add('editButton');

                const removeButton = document.createElement('button');
                removeButton.innerHTML = "REMOVE"
                removeButton.classList.add('removeButton');

                container.appendChild(itemBox);

                itemBox.appendChild(input);
                itemBox.appendChild(editButton);
                itemBox.appendChild(removeButton);


                editButton.addEventListener('click', () => this.edit(input));
                removeButton.addEventListener('click', () => this.remove(itemBox));
        }
        edit(input) {
                input.disabled = !input.disabled;
        }

        remove(item) {
                container.removeChild(item);
        }
}

function putHere() {
        if (input.value != "") {
                new Item(input.value);
                input.value = "";
        }
}

addButton.addEventListener('click', putHere);

window.addEventListener('keydown', (e) => {
        if (e.which == 13) {
                putHere();
        }
})
