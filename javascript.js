const gridSize = 1000;

const mainContainer = document.querySelector("#container");
mainContainer.setAttribute("style", "display:flex; align-items:center; flex-direction: column;");
const createGridBtn = document.createElement("button");
createGridBtn.textContent = "Create a new grid";
createGridBtn.setAttribute("style", "margin-bottom:32px;");
createGridBtn.addEventListener("click", createNewGrid);
mainContainer.append(createGridBtn);
const gridContainer = document.createElement("div");
gridContainer.setAttribute("style", `width:${gridSize}px; height: ${gridSize}px; background: #f1f1f1; display:flex; flex-wrap: wrap;`);
mainContainer.append(gridContainer);

function createNewGrid() {
    let numberOfCells = prompt("Enter number of cells for a new grid", "16");
    if (numberOfCells > 100) { numberOfCells = 100; };
    let oldCells = document.querySelectorAll("#cell");
    for (cell of oldCells) { cell.remove(); };
    createGrid(numberOfCells);
}

//I don't know how to math, so opacity increase calculation might be silly?
function createGrid(numberOfCells) {
    let cellSize = gridSize / numberOfCells;
    let cellOpacity = 0;

    for (let i = 0; i < numberOfCells * numberOfCells; i++) {
        const square = document.createElement("div");
        square.setAttribute("style", `width: ${cellSize}px; height: ${cellSize}px; background: gray; opacity: ${cellOpacity}%; border: 1px dashed #c2c2c2; margin:-1px;`)
        square.setAttribute("id", "cell");
        square.addEventListener("mouseenter", function (e) {
            cellOpacity = e.target.style.opacity * 100;
            if (cellOpacity < 100) cellOpacity += 10;
            e.target.style.opacity = `${cellOpacity}%`;
        });
        gridContainer.appendChild(square);
    }
}

createGrid(16);