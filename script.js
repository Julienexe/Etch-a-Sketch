let container = document.querySelector('.grid-area');

function createGrid(rows, cols) {
    clearGrid();
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty("width", rows * 22+ "px");
    container.style.setProperty("height", cols * 20 + "px");
    container.style.setProperty("display", "flex");
    container.style.setProperty("flex-direction", "row");
    container.style.setProperty("flex-wrap", "wrap");
    container.style.setProperty("justify-content", "start");
    container.style.setProperty("align-content", "start");
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        if (rows <= 30) {
            container.appendChild(cell).className = 'grid-item';
        } else {
            container.appendChild(cell).className = 'grid-item-sm';
        }

    }
}

function createGridSmall(rows,cols){
    clearGrid();
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.style.setProperty("width", rows * 14.5+ "px");
    container.style.setProperty("height", cols * 10+ "px");
    container.style.setProperty("display", "flex");
    container.style.setProperty("flex-direction", "row");
    container.style.setProperty("flex-wrap", "wrap");
    container.style.setProperty("justify-content", "start");
    container.style.setProperty("align-content", "start");
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item-sm';
    }
}

container.addEventListener('mouseover', function(e) {
    if (e.target.className === 'grid-item' || e.target.className === 'grid-item-sm') {
        e.target.style.backgroundColor = 'black';
    }
});

let resetButton = document.querySelector('.resize');

resetButton.addEventListener('click', function() {
    let newSize = prompt("Enter the new size of the grid: ");
    if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 100 || Number.isNaN(newSize)) {
            alert("Please enter a number between 1 and 100");
            resetGrid();
        } else {
            if (newSize <= 30) {
                createGrid(newSize, newSize);
            } else{
            createGridSmall(newSize, newSize);}
        }
    }
});

function clearGrid() {
    let gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        container.removeChild(element);
    });
}

function resetGrid() {
    let gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
}

createGrid(20,20);