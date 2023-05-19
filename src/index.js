import { newGameSetup, placeTestShips } from "./game-engine";
import { initialLoad, generateBoard, updateBoard } from "./interface";

initialLoad();
let newGame = newGameSetup(10);
let playerOne = newGame[0];
let playerTwo = newGame[1];

generateBoard(playerOne.board);
placeTestShips(newGame)

setTimeout(() => {
    updateBoard(playerOne.board);    
}, 5000);





