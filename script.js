const ROWDIVSTYLE = 'display: flex; flex: 1; justify-content: space-between;';
const COLDIVSTYLE = 'flex: 1;'
const COLDIVHOVEREDSTYLE = 'flex: 1; background-color: black;'
const CONTAINER = document.getElementById('maincontainer');


function createGrid(length) {
    for (let i = 0; i < length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.cssText = ROWDIVSTYLE;
        for (let j = 0; j < length; j++) {
            const colDiv = document.createElement('div');
            colDiv.style.cssText = COLDIVSTYLE;
            setToBlackOnHover(colDiv);
            rowDiv.appendChild(colDiv);
        }
        CONTAINER.appendChild(rowDiv);
    }
}

function setToBlackOnHover(colDiv) {
    colDiv.addEventListener("mouseover", () => {
        colDiv.style.cssText = COLDIVHOVEREDSTYLE;
    })
}

createGrid(16);
let input = prompt('Enter length of etch a sketch');
if (input <= 0) input = 1;
if (input > 100) input = 100;
while (CONTAINER.firstChild) {
    CONTAINER.removeChild(CONTAINER.firstChild);
}

createGrid(input);