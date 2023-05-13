function Ship (size) {
    var battleship = {
        length: size,
        timesHit: 0,
        sunk: false,
        hit: function (x = 1) {
            this.timesHit += x;
            this.isSunk();
        },
        isSunk: function () {
            if (this.timesHit >= this.length) {
                this.sunk = true;
            }
        }

    }
    return battleship;
}

function GameBoard (size=10) {
    var board = {
        boardstate: [],
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            board.boardstate.push([i,j]);
        }
    }
    return board;
}

export {
    Ship,
    GameBoard
}