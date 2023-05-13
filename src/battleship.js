function Ship (size) {
    var battleship = {
        length: size,
        timesHit: 0,
        sunk: false,
        hit: function (x = 1) {
            this.timesHit += x;
            this.isSunk();
        },
        isSunk: function () {
            if (this.timesHit >= this.length) {
                this.sunk = true;
            }
        }

    }
    return battleship;
}

function sum(a, b) {
    return a + b;
  }

export {
    sum,
    Ship
}