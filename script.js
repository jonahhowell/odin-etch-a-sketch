const ROWDIVSTYLE = 'display: flex; flex: 1; justify-content: space-between;';
const COLDIVSTYLE = 'flex: 1;'
const COLDIVHOVEREDSTYLE = 'flex: 1; background-color: black;'


function createGrid(length) {
    const container = document.getElementById('maincontainer');
    for (let i = 0; i < length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.cssText = ROWDIVSTYLE;
        for (let j = 0; j < length; j++) {
            const colDiv = document.createElement('div');
            colDiv.style.cssText = COLDIVSTYLE;
            setToBlackOnHover(colDiv);
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
}

function setToBlackOnHover(colDiv) {
    colDiv.addEventListener("mouseover", () => {
        colDiv.style.cssText = COLDIVHOVEREDSTYLE;
    })
}

createGrid(9);