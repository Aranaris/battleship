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

export {
    initialLoad, 
    updateBoard
}

