import newGameSetup from "./game-engine";
import { initialLoad, generateBoard } from "./interface";

initialLoad();
let newGame = newGameSetup(10);
let playerOne = newGame[0];
let playerTwo = newGame[1];

generateBoard(playerOne.board);



