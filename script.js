let container = document.querySelector('.container');

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

function clearGrid() {
    let gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

createGrid(16, 16);