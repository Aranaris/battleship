import { GameBoard, Player } from "./battleship";
import { resetBoard, updateBoard } from "./interface";

function newGameSetup (boardSize = 10) {
    let players = [Player(new GameBoard(boardSize), 'PlayerOne', 'human'), Player(new GameBoard(boardSize), 'PlayerTwo', 'Computer')];

    return players;
}

function placeTestShips (players) {
    let player1 = players[0];
    let player2 = players[1];

    player1.board.placeShip([0,0], 'horizontal', 2);
    player1.board.placeShip([1,0], 'horizontal', 3);
    player1.board.placeShip([0,7], 'vertical', 3);
    player1.board.placeShip([2,0], 'horizontal', 4);
    player1.board.placeShip([0,5], 'vertical', 5);

    player2.board.placeShip([0,0], 'horizontal', 2);
    player2.board.placeShip([1,0], 'horizontal', 3);
    player2.board.placeShip([0,7], 'vertical', 3);
    player2.board.placeShip([2,0], 'horizontal', 4);
    player2.board.placeShip([0,5], 'vertical', 5);
    return [player1, player2];
}

function newGame () {
    var game = {
        players: [],
        turn: '',
        gameEnd: false,

        checkGameEnd: function() {
            for (let player of this.players) {
                if (player.board.allSunk) {
                    this.gameEnd = true;
                    return player.getName;
                }
            }
        },

        nextTurn: function() {
            let losingPlayer = this.checkGameEnd()
            if (this.gameEnd) {
                this.turn = '';
                return `Game Over! All ${losingPlayer}'s ships have been sunk.`;
            }
            
            if (this.turn === this.players[0].getName) {
                this.turn = this.players[1].getName;
            } else if (this.turn === this.players[1].getName) {
                this.turn = this.players[0].getName;
            }
            
            if (this.players[1].playerType === 'Computer' && this.turn === this.players[1].getName) {
                let compMove = this.players[1].makeMove(this.players[1].board);
                updateBoard(this.players[0].board, this.players[0].board.receiveAttack(compMove), compMove);
                this.nextTurn();
            }
        },

        reset: function() {
            this.players = newGameSetup();
            placeTestShips(this.players);
            this.turn = this.players[0].getName;
            resetBoard(this);
        }
    }

    return game;
}

export {
    newGame,
    newGameSetup,
    placeTestShips
}