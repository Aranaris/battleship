import { Ship, GameBoard } from "./battleship";
import { initialLoad } from "./interface";

initialLoad();

let body = document.querySelector('#game-board');
let testShip = Ship(3);
testShip.hit(1);
body.textContent = JSON.stringify(testShip);

testShip.hit(1);
testShip.hit(1);
body.textContent += JSON.stringify(testShip);

let board = GameBoard(10);

body.textContent += JSON.stringify(board.emptySquares);

