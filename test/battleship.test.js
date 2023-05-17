import { Ship, GameBoard } from "../src/battleship";

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('create new ship object', () => {
    let ship1 = Ship(4);
    expect(ship1).toMatchObject({
        length: 4,
        timesHit: 0,
        sunk: false,
        hit: expect.any(Function),
        isSunk: expect.any(Function),
    })
    ship1.hit(4);
    expect(ship1).toMatchObject({
        length: 4,
        timesHit: 4,
        sunk: true,
        hit: expect.any(Function),
        isSunk: expect.any(Function),
    })
});

test('ship functions hit and isSunk', () => {
    let ship1 = Ship(4);
    for (let i = 0; i < ship1.length; i++) {
        ship1.hit();
    }
    expect(ship1).toMatchObject({
        length: 4,
        timesHit: 4,
        sunk: true,
        hit: expect.any(Function),
        isSunk: expect.any(Function),
    })
});

test('create gameboard', () => {
    let newBoard = GameBoard(10);
    expect(newBoard.emptySquares.length).toBe(100);
});

test('placing ship on board', () => {
    let newBoard = GameBoard(4);
    newBoard.placeShip([0,0], 'horizontal', 3);
    expect(newBoard.ships).toMatchObject([{
        boardSquares: [[0,0],[0,1],[0,2]],
    }]);
});

test('placing ship on board with invalid square', () => {
    let newBoard = GameBoard(10);
    expect(newBoard.placeShip([9,9], 'vertical', 3)).toBe('Invalid placement');
    expect(newBoard.ships).toMatchObject([]);
});

test('receiving an attack with coordinates input', () => {
    let newBoard = GameBoard(10);
    newBoard.placeShip([0,0], 'horizontal', 3);
    expect(newBoard.receiveAttack([2,2])).toBe('Attack Missed!');
    expect(newBoard.receiveAttack([2,2])).toBe('Invalid Coordinates (Missed Atk)');
    expect(newBoard.receiveAttack([0,1])).toBe('Direct Hit!');
    expect(newBoard.receiveAttack([0,1])).toBe('Invalid Coordinates (Ship Hit)');
    expect(newBoard.receiveAttack([10,10])).toBe('Invalid Square');
    expect(newBoard.ships[0].ship.timesHit).toBe(1);
    expect(newBoard.receiveAttack([0,0])).toBe('Direct Hit!');
    expect(newBoard.receiveAttack([0,2])).toBe('Direct Hit!');
    expect(newBoard.ships[0].ship.sunk).toBe(true);
});