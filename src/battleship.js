function Ship (size) {
    var battleship = {
        length: size,
        hitLocation: [],
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
        emptySquares: [],
        size: size,
        ships: [],
        missedAttacks: [],
        allSunk: false,
        placeShip: function(location, orientation, shipLength) {
            let ship = new Ship(shipLength);
            let shipSquares = [];
            for (let i = 0; i < ship.length; i++) {
                let square = -1;
                if (orientation == 'horizontal') {
                    let x = location[0];
                    let y = location[1] + i;
                    square = this.emptySquares.findIndex( (element) => {
                        return element[0] === x && element[1] === y;
                    });
                } else {
                    let x = location[0] + i;
                    let y = location[1];
                    square = this.emptySquares.findIndex( (element) => {
                        return element[0] === x && element[1] === y;
                    });
                }
                if (square === -1) {return 'Invalid placement'}
                shipSquares.push(this.emptySquares.splice(square, 1)[0]);
            }
            
            let shipPlacement = {
                ship: ship,
                boardSquares: shipSquares,
            }
            this.ships.push(shipPlacement);
        },
        receiveAttack: function(location) {
            let square = -1;
            square = this.emptySquares.findIndex( (element) => {
                    return element[0] === location[0] && element[1] === location[1];
                })
            if (square >= 0) {
                this.missedAttacks.push(this.emptySquares.splice(square, 1)[0]);
                return 'miss';
            } else if (this.missedAttacks.findIndex( (element) => {
                return element[0] === location[0] && element[1] === location[1];
            }) >= 0) {
                return 'Invalid Coordinates (Missed Atk)';
            } else {
                for (let i of this.ships) {
                    let hitSquare = i.boardSquares.findIndex( (element) => {
                        return element[0] === location[0] && element[1] === location[1];
                    })
                    if (i.ship.hitLocation.includes(hitSquare)) {
                        return 'Invalid Coordinates (Ship Hit)';
                    } else if (hitSquare >= 0) {
                        i.ship.hit();
                        i.ship.hitLocation.push(hitSquare);
                        if (i.ship.sunk) {
                            this.checkAllSunk();
                        }
                        return 'hit';
                    }
                }
                return 'Invalid Square';
            }
        },
        checkAllSunk: function() {
            for (let i of this.ships) {
                if (!i.ship.sunk) {
                    return false;
                }
            }
            this.allSunk = true;
            return true;
        }
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            board.emptySquares.push([i,j]);
        }
    }
    return board;
}

const Player = (playerBoard, name='Player1',type='Computer') => {
    let board = playerBoard;
    let playerName = name;
    let playerType = type;
    let validMoves = [];
    const greetPlayer = () => console.log(`${name} has entered the game`);
    const setName = (newName) => playerName = newName;
    const getName = playerName;
    const makeMove = (board, location) => {
        if (location) {
            return board.receiveAttack(location);
        } else {
            return _generateMove();
        }
    }
    const _generateMove = () => {
        let move = Math.floor(Math.random() * validMoves.length);
        return validMoves.splice(move, 1)[0];
    }

    for (let i = 0; i < playerBoard.size; i++) {
        for (let j = 0; j < playerBoard.size; j++) {
            validMoves.push([i,j]);
        }
    }
    return {validMoves, board, greetPlayer, setName, getName, playerType, makeMove};
}

export {
    Ship,
    GameBoard,
    Player,
}