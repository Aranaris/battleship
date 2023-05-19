/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBoard\": () => (/* binding */ GameBoard),\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship (size) {\n    var battleship = {\n        length: size,\n        hitLocation: [],\n        timesHit: 0,\n        sunk: false,\n        hit: function (x = 1) {\n            this.timesHit += x;\n            this.isSunk();\n        },\n        isSunk: function () {\n            if (this.timesHit >= this.length) {\n                this.sunk = true;\n            }\n        }\n\n    }\n    return battleship;\n}\n\nfunction GameBoard (size=10) {\n    var board = {\n        emptySquares: [],\n        size: size,\n        ships: [],\n        missedAttacks: [],\n        allSunk: false,\n        placeShip: function(location, orientation, shipLength) {\n            let ship = new Ship(shipLength);\n            let shipSquares = [];\n            for (let i = 0; i < ship.length; i++) {\n                let square = -1;\n                if (orientation == 'horizontal') {\n                    let x = location[0];\n                    let y = location[1] + i;\n                    square = this.emptySquares.findIndex( (element) => {\n                        return element[0] === x && element[1] === y;\n                    });\n                } else {\n                    let x = location[0] + i;\n                    let y = location[1];\n                    square = this.emptySquares.findIndex( (element) => {\n                        return element[0] === x && element[1] === y;\n                    });\n                }\n                if (square === -1) {return 'Invalid placement'}\n                shipSquares.push(this.emptySquares.splice(square, 1)[0]);\n            }\n            \n            let shipPlacement = {\n                ship: ship,\n                boardSquares: shipSquares,\n            }\n            this.ships.push(shipPlacement);\n        },\n        receiveAttack: function(location) {\n            let square = -1;\n            square = this.emptySquares.findIndex( (element) => {\n                    return element[0] === location[0] && element[1] === location[1];\n                })\n            if (square >= 0) {\n                this.missedAttacks.push(this.emptySquares.splice(square, 1)[0]);\n                return 'Attack Missed!';\n            } else if (this.missedAttacks.findIndex( (element) => {\n                return element[0] === location[0] && element[1] === location[1];\n            }) >= 0) {\n                return 'Invalid Coordinates (Missed Atk)';\n            } else {\n                for (let i of this.ships) {\n                    let hitSquare = i.boardSquares.findIndex( (element) => {\n                        return element[0] === location[0] && element[1] === location[1];\n                    })\n                    if (i.ship.hitLocation.includes(hitSquare)) {\n                        return 'Invalid Coordinates (Ship Hit)';\n                    } else if (hitSquare >= 0) {\n                        i.ship.hit();\n                        i.ship.hitLocation.push(hitSquare);\n                        if (i.ship.sunk) {\n                            this.checkAllSunk();\n                        }\n                        return 'Direct Hit!';\n                    }\n                }\n                return 'Invalid Square';\n            }\n        },\n        checkAllSunk: function() {\n            for (let i of this.ships) {\n                if (!i.ship.sunk) {\n                    return false;\n                }\n            }\n            this.allSunk = true;\n            return true;\n        }\n    }\n\n    for (let i = 0; i < size; i++) {\n        for (let j = 0; j < size; j++) {\n            board.emptySquares.push([i,j]);\n        }\n    }\n    return board;\n}\n\nconst Player = (playerBoard, name='Player1',type='Computer') => {\n    let board = playerBoard;\n    let playerName = name;\n    let playerType = type;\n    let validMoves = [];\n    const greetPlayer = () => console.log(`${name} has entered the game`);\n    const setName = (newName) => playerName = newName;\n    const getName = playerName;\n    const makeMove = (board, location) => {\n        if (location) {\n            return board.receiveAttack(location);\n        } else {\n            return _generateMove();\n        }\n    }\n    const _generateMove = () => {\n        let move = Math.floor(Math.random() * validMoves.length);\n        return validMoves.splice(move, 1)[0];\n    }\n\n    for (let i = 0; i < playerBoard.size; i++) {\n        for (let j = 0; j < playerBoard.size; j++) {\n            validMoves.push([i,j]);\n        }\n    }\n    return {validMoves, board, greetPlayer, setName, getName, playerType, makeMove};\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/game-engine.js":
/*!****************************!*\
  !*** ./src/game-engine.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newGameSetup\": () => (/* binding */ newGameSetup),\n/* harmony export */   \"placeTestShips\": () => (/* binding */ placeTestShips)\n/* harmony export */ });\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n\n\nfunction newGameSetup (boardSize = 10) {\n    let players = [(0,_battleship__WEBPACK_IMPORTED_MODULE_0__.Player)(new _battleship__WEBPACK_IMPORTED_MODULE_0__.GameBoard(boardSize), 'PlayerOne', 'human'), (0,_battleship__WEBPACK_IMPORTED_MODULE_0__.Player)(new _battleship__WEBPACK_IMPORTED_MODULE_0__.GameBoard(boardSize), 'PlayerTwo', 'computer')];\n\n    return players;\n}\n\nfunction placeTestShips (players) {\n    let player1 = players[0];\n    let player2 = players[1];\n\n    player1.board.placeShip([0,0], 'horizontal', 2);\n    player1.board.placeShip([1,0], 'horizontal', 3);\n    player1.board.placeShip([0,7], 'vertical', 3);\n    player1.board.placeShip([2,0], 'horizontal', 4);\n    player1.board.placeShip([0,5], 'vertical', 5);\n\n    player2.board.placeShip([0,0], 'horizontal', 2);\n    player2.board.placeShip([1,0], 'horizontal', 3);\n    player2.board.placeShip([0,7], 'vertical', 3);\n    player2.board.placeShip([2,0], 'horizontal', 4);\n    player2.board.placeShip([0,5], 'vertical', 5);\n    return [player1, player2];\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/game-engine.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-engine */ \"./src/game-engine.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n\n\n\n(0,_interface__WEBPACK_IMPORTED_MODULE_1__.initialLoad)();\nlet newGame = (0,_game_engine__WEBPACK_IMPORTED_MODULE_0__.newGameSetup)(10);\nlet playerOne = newGame[0];\nlet playerTwo = newGame[1];\n\n(0,_interface__WEBPACK_IMPORTED_MODULE_1__.generateBoard)(playerOne.board);\n(0,_game_engine__WEBPACK_IMPORTED_MODULE_0__.placeTestShips)(newGame)\n\nsetTimeout(() => {\n    ;(0,_interface__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(playerOne.board);    \n}, 5000);\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBoard\": () => (/* binding */ generateBoard),\n/* harmony export */   \"initialLoad\": () => (/* binding */ initialLoad),\n/* harmony export */   \"resetBoard\": () => (/* binding */ resetBoard),\n/* harmony export */   \"updateBoard\": () => (/* binding */ updateBoard),\n/* harmony export */   \"updateSquareStyle\": () => (/* binding */ updateSquareStyle)\n/* harmony export */ });\nfunction initialLoad() {\n    const header = document.querySelector('#header');\n    header.textContent = 'testheader content';\n    const footer = document.querySelector('#footer');\n    footer.textContent = 'testfooter content';\n    const playerInfo = document.querySelector('#player-info');\n    playerInfo.textContent = 'player info goes here';\n}\n\nfunction resetBoard(playerBoard) {\n    let displayBoard = document.querySelector('#game-board');\n    displayBoard.replaceChildren();\n    generateBoard(playerBoard);\n}\n\nfunction generateBoard(playerBoard) {\n    let displayBoard = document.querySelector('#game-board');\n    displayBoard.style['grid-template-columns'] = `repeat(${playerBoard.size}, minmax(10px, 1fr)`;\n    displayBoard.style['grid-template-rows'] = `repeat(${playerBoard.size}, minmax(10px, 1fr)`;\n    for (let x = 0; x < playerBoard.size; x++) {\n        for (let y = 0; y < playerBoard.size; y++) {\n            const newSquare = document.createElement('div');\n            newSquare.classList.add('board-square');\n            newSquare.dataset.row = x;\n            newSquare.dataset.column = y;\n            newSquare.textContent = `(${x}, ${y})`;\n            displayBoard.appendChild(newSquare);\n        }\n    }\n}\n\nfunction updateBoard(playerBoard) {\n    for (let ship of playerBoard.ships) {\n        for (let i of ship.boardSquares) {\n            updateSquareStyle([i[0],i[1]], 'place-ship');\n        }\n    }\n}\n\nfunction getSquareElement(location) {\n    let x = location[0];\n    let y = location[1];\n    return document.querySelector(`[data-row=\"${x}\"][data-column=\"${y}\"]`);\n}\n\nfunction updateSquareStyle(location, action) {\n    let updateSquare = getSquareElement(location);\n\n    if (action == 'hit') {\n        updateSquare.classList.add('square-hit');\n    } else if (action == 'place-ship') {\n        updateSquare.classList.add('square-ship');\n    } else if (action == 'miss') {\n        updateSquare.classList.add('square-miss');\n    }\n\n}\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/interface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;