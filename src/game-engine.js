import { GameBoard, Player } from "./battleship";

function newGameSetup (boardSize = 10) {
    let players = [Player(new GameBoard(boardSize), 'PlayerOne', 'human'), Player(new GameBoard(boardSize), 'PlayerTwo', 'computer')];
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

export default newGameSetup;