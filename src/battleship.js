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
        emptySquares: [],
        size: size,
        ships: [],
        missedAttacks: [],
        allSunk: false,
        placeShip: function(location, orientation, shipLength) {
            let ship = new Ship(shipLength);
            let shipSquares = [];
            for (let i = 0; i < ship.length; i++) {
                if (orientation == 'horizontal') {
                    let square = this.emptySquares.findIndex( (element) => {
                        return element[0] === location[0] && element[1] === location[0] + i;
                    });
                    shipSquares.push(this.emptySquares.splice(square, 1)[0]);
                } else {
                    let newLocation = [location[0]+i, location[1]];
                    shipSquares.push(newLocation);
                }
            }
            
            let shipPlacement = {
                ship: ship,
                boardSquares: shipSquares,
            }
            this.ships.push(shipPlacement);
        }
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