function createGrid(length) {
    const container = document.getElementById('maincontainer');
    for (let i = 0; i < length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.cssText = 'flex: 1;'
        for (let j = 0; j < length; j++) {
            const colDiv = document.createElement('div');
            colDiv.textContent = j;
            rowDiv.appendChild(colDiv);
        }
        container.appendChild(rowDiv);
    }
}

createGrid(16);