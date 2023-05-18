function initialLoad() {
    const header = document.querySelector('#header');
    header.textContent = 'testheader content';
    const footer = document.querySelector('#footer');
    footer.textContent = 'testfooter content';
    const playerInfo = document.querySelector('#player-info');
    playerInfo.textContent = 'player info goes here';
    updateBoard();
}

function updateBoard(playerBoard) {
    if (playerBoard) {
        return 'stuff';
    } else {
        return 'no stuff';
    }
}

function generateBoard(playerBoard) {
    let displayBoard = document.querySelector('#game-board');
    displayBoard.style['grid-template-columns'] = `repeat(${playerBoard.size}, minmax(10px, 1fr))`;
    displayBoard.style['grid-template-rows'] = `repeat(${playerBoard.size}, minmax(10px, 1fr)`;
    for (let x = 0; x < playerBoard.size; x++) {
        for (let y = 0; y < playerBoard.size; y++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('board-square');
            displayBoard.appendChild(newSquare);
        }
    }
}

export {
    initialLoad, 
    updateBoard,
    generateBoard
}

