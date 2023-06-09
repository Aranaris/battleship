import { newGame } from "./game-engine";

function initialLoad() {
    const header = document.querySelector('#header');
    header.textContent = 'Welcome to Battleship!';
    const footer = document.querySelector('#footer');
    footer.textContent = 'Aranaris';
}

function resetBoard(game) {
    let playerBoard = document.querySelector('#player-board');
    playerBoard.replaceChildren();
    let oppBoard = document.querySelector('#opponent-board');
    oppBoard.replaceChildren();
    generateBoards(game);

    const playerInfo = document.querySelector('#player-info');
    playerInfo.innerHTML = 'Current Players <br />';
    playerInfo.innerHTML += `<br /> Player 1: ${game.players[0].getName}` ;
    playerInfo.innerHTML += `<br /> Player 2: ${game.players[1].getName}` ;

    let resetButton = document.createElement('button');
    resetButton.id = 'reset-button';
    resetButton.textContent = 'Restart Game';
    resetButton.addEventListener('click', () => {
        game.reset();
    })
    let gameInfo = document.querySelector('#game-info');
    gameInfo.replaceChildren();
    gameInfo.appendChild(resetButton);
}

function generateBoards(game) {
    let players = game.players;
    let playerBoard = players[0].board;
    let oppBoard = players[1].board;
    let displayPlayerBoard = document.querySelector('#player-board');
    displayPlayerBoard.style['grid-template-columns'] = `repeat(${playerBoard.size}, minmax(40px, 1fr)`;
    displayPlayerBoard.style['grid-template-rows'] = `repeat(${playerBoard.size}, minmax(40px, 1fr)`;
    for (let x = 0; x < playerBoard.size; x++) {
        for (let y = 0; y < playerBoard.size; y++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('board-square');
            newSquare.dataset.player = 'player';
            newSquare.dataset.row = x;
            newSquare.dataset.column = y;
            // newSquare.textContent = `(${x}, ${y})`;
            displayPlayerBoard.appendChild(newSquare);
        }
    }

    let displayOppBoard = document.querySelector('#opponent-board');
    displayOppBoard.style['grid-template-columns'] = `repeat(${oppBoard.size}, minmax(40px, 1fr)`;
    displayOppBoard.style['grid-template-rows'] = `repeat(${oppBoard.size}, minmax(40px, 1fr)`;
    for (let x = 0; x < oppBoard.size; x++) {
        for (let y = 0; y < oppBoard.size; y++) {
            let newSquare = document.createElement('div');
            newSquare.classList.add('board-square');
            newSquare.dataset.player = 'opponent';
            newSquare.dataset.row = x;
            newSquare.dataset.column = y;
            // newSquare.textContent = `(${x}, ${y})`;
            newSquare.addEventListener('click', () => {
                if (game.gameEnd || players[0].getName !== game.turn) {
                    return;
                }
                let move = oppBoard.receiveAttack([x,y]);
                if (move === 'hit' || move === 'miss') {
                    updateSquareStyle([x,y], move, 'opponent');
                    game.nextTurn();
                }
                
            });
            displayOppBoard.appendChild(newSquare);
        }
    }
}

function updateBoard(playerBoard, action, location=null, hidden=false) {
    if (action === 'place-ship') {
        for (let ship of playerBoard.ships) {
            for (let i of ship.boardSquares) {
                updateSquareStyle([i[0],i[1]], action, 'player');
            }
        }
    } else {
        updateSquareStyle(location, action, 'player');
    }
    
}

function getSquareElement(location, playerInfo='player') {
    return document.querySelector(`[data-player="${playerInfo}"][data-row="${location[0]}"][data-column="${location[1]}"]`);
}

function updateSquareStyle(location, action, playerInfo='player') {
    let updateSquare = getSquareElement(location, playerInfo);

    if (action == 'hit') {
        updateSquare.classList.add('square-hit');
    } else if (action == 'place-ship') {
        updateSquare.classList.add('square-ship');
    } else if (action == 'miss') {
        updateSquare.classList.add('square-miss');
    }

}

export {
    initialLoad, 
    resetBoard,
    generateBoards,
    updateSquareStyle,
    updateBoard,
}

