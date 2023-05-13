import { Ship } from "../src/battleship";

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