import { GameBoard, Player } from "./battleship";

function newGameSetup (players = [new Player('PlayerOne', 'human'), new Player('PlayerTwo', 'computer')], boardSize = 10) {
    let player1 = players[0];
    let player2 = players[1];

    player1.board = new GameBoard(boardSize);
    player2.board = new GameBoard(boardSize);

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

export default newGameSetup;