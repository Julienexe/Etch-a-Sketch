let container = document.querySelector('.container');

function makeGrid(size) {
    for(let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.setAttribute("style", "flex: 1; display: flex;");
        container.appendChild(row);
        for(let j = 1; j <= size; j++) {
            let square = document.createElement("div");
            square.setAttribute("style", "flex: 1; border: grey solid 1px;");
            row.appendChild(square);

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            });
        }
    }
}

function resetGrid(){
    let size = prompt("Enter the size of the grid: ");
    container.innerHTML = "";
    makeGrid(size);
}

function clearGrid(){
    let squares = document.querySelectorAll('.container div div');
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
}


makeGrid(16);