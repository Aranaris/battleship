import { Ship, GameBoard } from "./battleship";

let body = document.querySelector('body');
let testShip = Ship(3);
testShip.hit(1);
body.textContent = JSON.stringify(testShip);

testShip.hit(1);
testShip.hit(1);
body.textContent += JSON.stringify(testShip);

let board = GameBoard(10);

body.textContent += JSON.stringify(board.boardstate);

