function initialLoad() {
    const header = document.querySelector('#header');
    header.textContent = 'testheader content';
    const footer = document.querySelector('#footer');
    footer.textContent = 'testfooter content';
    const playerInfo = document.querySelector('#player-info');
    playerInfo.textContent = 'player info goes here';
}

function resetBoard(playerBoard) {
    let displayBoard = document.querySelector('#game-board');
    displayBoard.replaceChildren();
    generateBoard(playerBoard);
}

function generateBoard(players) {
    let playerBoard = players[0].board;
    let oppBoard = players[1].board;
    let displayPlayerBoard = document.querySelector('#player-board');
    displayPlayerBoard.style['grid-template-columns'] = `repeat(${playerBoard.size}, minmax(10px, 1fr)`;
    displayPlayerBoard.style['grid-template-rows'] = `repeat(${playerBoard.size}, minmax(10px, 1fr)`;
    for (let x = 0; x < playerBoard.size; x++) {
        for (let y = 0; y < playerBoard.size; y++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('board-square');
            newSquare.dataset.row = x;
            newSquare.dataset.column = y;
            newSquare.textContent = `(${x}, ${y})`;
            displayPlayerBoard.appendChild(newSquare);
        }
    }

    let displayOppBoard = document.querySelector('#opponent-board');
    displayOppBoard.style['grid-template-columns'] = `repeat(${oppBoard.size}, minmax(10px, 1fr)`;
    displayOppBoard.style['grid-template-rows'] = `repeat(${oppBoard.size}, minmax(10px, 1fr)`;
    for (let x = 0; x < oppBoard.size; x++) {
        for (let y = 0; y < oppBoard.size; y++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('board-square');
            newSquare.dataset.row = x;
            newSquare.dataset.column = y;
            newSquare.textContent = `(${x}, ${y})`;
            displayOppBoard.appendChild(newSquare);
        }
    }
}

function updateBoard(playerBoard, action, location=null, hidden=false) {
    if (action === 'place-ship') {
        for (let ship of playerBoard.ships) {
            for (let i of ship.boardSquares) {
                updateSquareStyle([i[0],i[1]], action);
            }
        }
    } else {
        updateSquareStyle(location, action);
    }
    
}

function getSquareElement(location) {
    let x = location[0];
    let y = location[1];
    return document.querySelector(`[data-row="${x}"][data-column="${y}"]`);
}

function updateSquareStyle(location, action) {
    let updateSquare = getSquareElement(location);

    if (action == 'hit') {
        updateSquare.classList.add('square-hit');
    } else if (action == 'place-ship') {
        updateSquare.classList.add('square-ship');
    } else if (action == 'miss') {
        updateSquare.classList.add('square-miss');
    }

}

function addClickEvent(location) {
    
}


export {
    initialLoad, 
    resetBoard,
    generateBoard,
    updateSquareStyle,
    updateBoard
}

