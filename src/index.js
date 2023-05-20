import { newGameSetup, placeTestShips } from "./game-engine";
import { initialLoad, generateBoard, updateBoard } from "./interface";

initialLoad();
let newGame = newGameSetup(10);

generateBoard(newGame);
placeTestShips(newGame);

setTimeout(() => {
    updateBoard(newGame[0].board, 'place-ship');    
}, 3000);

let turnOne = newGame[0].board.receiveAttack([0,0]);
let turnTwo = newGame[0].board.receiveAttack([3,2]);

setTimeout(() => {
    updateBoard(newGame[0].board, turnOne, [0,0]);
    updateBoard(newGame[0].board, turnTwo, [3,2]);    
}, 6000);



