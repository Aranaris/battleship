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
                    square = this.emptySquares.findIndex( (element) => {
                        return element[0] === location[0] && element[1] === location[1] + i;
                    });
                } else {
                    square = this.emptySquares.findIndex( (element) => {
                        return element[0] === location[0] + i && element[1] === location[1];
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
                return 'Attack Missed!';
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
                        return 'Direct Hit!';
                    }
                }
                return 'Invalid Square';
            }
        },
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            board.emptySquares.push([i,j]);
        }
    }
    return board;
}

export {
    Ship,
    GameBoard
}