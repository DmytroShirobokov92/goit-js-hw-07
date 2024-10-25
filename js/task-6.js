const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    destroyBoxes();

    const boxesFragment = document.createDocumentFragment();
    let boxSize = 30;

    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginTop = '10px';

        boxesFragment.appendChild(box);
        boxSize += 10;
    }

    boxesContainer.appendChild(boxesFragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
