import { newGame } from "./game-engine";
import { initialLoad, updateBoard } from "./interface";

initialLoad();
let instance = newGame();
instance.reset();

setTimeout(() => {
    updateBoard(instance.players[0].board, 'place-ship');    
}, 3000);



